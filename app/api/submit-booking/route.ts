import { NextResponse } from 'next/server'

const BOOKING_WEBHOOK_URL = 'https://hook.us2.make.com/gs5om7dt7o2kg61ldzn0a54da4vqk452'
const QUOTE_BOOKING_WEBHOOK_URL = 'https://hook.us2.make.com/ecjag2rwujqmifi7qpl6bfsq3lfm81tx'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Log the submission for debugging
    console.log('Booking submission received:', data)

    // Determine which webhook URL to use based on whether this is a quote-initiated booking
    const webhookUrl = data.fromQuote ? QUOTE_BOOKING_WEBHOOK_URL : BOOKING_WEBHOOK_URL

    // Send to Make.com webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: 'freshbay-website',
        formType: data.fromQuote ? 'quote-booking' : 'direct-booking'
      }),
    })

    if (!webhookResponse.ok) {
      throw new Error(`Webhook request failed: ${webhookResponse.statusText}`)
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Booking submission received' 
    })
  } catch (error) {
    console.error('Error processing booking submission:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process booking submission' 
      },
      { status: 500 }
    )
  }
}
