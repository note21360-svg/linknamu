// 서버(Route Handler)에서만 사용
import { MongoClient, type Collection } from "mongodb";
import { links, type LinkId } from "@/lib/links";

type ClickDoc = { _id: LinkId; clicks: number };

// 개발 중 핫 리로드나 서버리스 재호출 때마다 새로 연결하지 않도록 전역에 보관
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

async function getCollection(): Promise<Collection<ClickDoc>> {
  if (!globalForMongo._mongoClientPromise) {
    const uri = process.env.MONGODB_URL;
    if (!uri) throw new Error("MONGODB_URL 환경 변수가 없습니다.");
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect().catch((err) => {
      globalForMongo._mongoClientPromise = undefined; // 실패하면 다음 요청에서 다시 시도
      throw err;
    });
  }
  const client = await globalForMongo._mongoClientPromise;
  return client.db("linknamu").collection<ClickDoc>("links");
}

/** 모든 링크의 클릭 수 → { github: 24, linkedin: 3, blog: 0 } */
export async function getAllClicks(): Promise<Record<LinkId, number>> {
  const ids = links.map((link) => link.id);
  const counts = Object.fromEntries(ids.map((id) => [id, 0])) as Record<LinkId, number>;
  const docs = await (await getCollection()).find({ _id: { $in: ids } }).toArray();
  for (const doc of docs) counts[doc._id] = doc.clicks ?? 0;
  return counts;
}

/** 클릭 수를 1 늘리고 늘어난 값을 반환 */
export async function incrementClick(id: LinkId): Promise<number> {
  const doc = await (await getCollection()).findOneAndUpdate(
    { _id: id },
    { $inc: { clicks: 1 } },
    { upsert: true, returnDocument: "after" },
  );
  return doc?.clicks ?? 1;
}
