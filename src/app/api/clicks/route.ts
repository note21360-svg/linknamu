import { connection } from "next/server";
import { getAllClicks } from "@/lib/clicks";

// GET /api/clicks → { github: 24, linkedin: 3, blog: 0 }
export async function GET() {
  await connection(); // 빌드 시 미리 렌더링하지 않고 매 요청마다 DB에서 조회
  try {
    return Response.json(await getAllClicks(), { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "server error" }, { status: 500 });
  }
}
