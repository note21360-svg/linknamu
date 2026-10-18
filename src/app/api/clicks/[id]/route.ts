import type { NextRequest } from "next/server";
import { incrementClick } from "@/lib/clicks";
import { isLinkId } from "@/lib/links";

// POST /api/clicks/:id → { id, clicks }
export async function POST(_req: NextRequest, ctx: RouteContext<"/api/clicks/[id]">) {
  const { id } = await ctx.params;
  if (!isLinkId(id)) return Response.json({ error: "unknown link" }, { status: 404 });
  try {
    return Response.json({ id, clicks: await incrementClick(id) });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "server error" }, { status: 500 });
  }
}
