import productsWithIds from '@/app/api/products/product';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  // console.log('Received ID:', params.id); // Log to check params.id
  const product = productsWithIds.find((p) => p.id === params.id);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
