import { NextResponse } from 'next/server';
import productsWithIds from '@/app/api/products/product';

export function GET(req) {
  const url = new URL(req.url);
  const skip = parseInt(url.searchParams.get('skip') || '0', 10);
  const limit = parseInt(url.searchParams.get('limit') || '10', 10);

  // Apply skip and limit
  const paginatedProducts = productsWithIds.slice(skip, skip + limit);

  const data = {
    records: paginatedProducts,
    count: productsWithIds.length,
  };

  return NextResponse.json(data);
}
