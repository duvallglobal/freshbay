"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface QuoteActionsProps {
  quoteData: any;
  quoteAmount: number;
  onModifyQuote: () => void;
}

export function QuoteActions({ quoteData, quoteAmount, onModifyQuote }: QuoteActionsProps) {
  const router = useRouter();

  const handleBookService = () => {
    // Store quote data in localStorage for the booking form
    localStorage.setItem('quoteData', JSON.stringify({
      ...quoteData,
      quoteAmount: quoteAmount,
      quoteId: Date.now().toString(),
      quoteDate: new Date().toISOString()
    }));

    // Redirect to booking page
    window.location.href = '/book?fromQuote=true';
  };

  return (
    <>
      <Button
        className="w-full bg-secondary text-primary hover:bg-secondary/90"
        size="lg"
        onClick={handleBookService}
      >
        Book This Service
      </Button>
      <Button
        variant="outline"
        onClick={onModifyQuote}
        className="bg-white/10 text-white border-white/20 hover:bg-white/20"
      >
        Modify Quote
      </Button>
    </>
  );
}