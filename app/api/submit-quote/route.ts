import { NextResponse } from 'next/server'

const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/gs5om7dt7o2kg61ldzn0a54da4vqk452'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Log the submission for debugging
    console.log('Quote submission received:', data)

    // Send to Make.com webhook
    const webhookResponse = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // Make.com automatically handles CORS
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: 'freshbay-website'
      }),
    })

    if (!webhookResponse.ok) {
      throw new Error(`Webhook request failed: ${webhookResponse.statusText}`)
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Quote submission received' 
    })
  } catch (error) {
    console.error('Error processing quote submission:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process quote submission' 
      },
      { status: 500 }
    )
  }
}
