import { NextResponse } from 'next/server';

export async function POST() {
    return NextResponse.json(
        {
            error: 'Legacy /api/contact route is deprecated. Use the active contact mailto transport flow.',
        },
        { status: 410 }
    );
}
