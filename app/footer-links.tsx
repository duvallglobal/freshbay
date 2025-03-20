import Link from "next/link"

export function FooterLinks() {
  return (
    <>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Residential</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/services/residential/standard-cleaning" className="text-muted-foreground hover:text-foreground">
              Standard Cleaning
            </Link>
          </li>
          <li>
            <Link href="/services/residential/deep-cleaning" className="text-muted-foreground hover:text-foreground">
              Deep Cleaning
            </Link>
          </li>
          <li>
            <Link
              href="/services/residential/recurring-cleaning"
              className="text-muted-foreground hover:text-foreground"
            >
              Recurring Cleaning
            </Link>
          </li>
          <li>
            <Link href="/services/residential/move-in-out" className="text-muted-foreground hover:text-foreground">
              Move-in/Move-out Cleaning
            </Link>
          </li>
          <li>
            <Link
              href="/services/residential/special-event-cleaning"
              className="text-muted-foreground hover:text-foreground"
            >
              Special Event Cleaning
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Commercial</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/services/commercial/office-space" className="text-muted-foreground hover:text-foreground">
              Office Space
            </Link>
          </li>
          <li>
            <Link href="/services/commercial/art-studios" className="text-muted-foreground hover:text-foreground">
              Art Studios
            </Link>
          </li>
          <li>
            <Link href="/services/commercial/massage-parlors" className="text-muted-foreground hover:text-foreground">
              Massage Parlors
            </Link>
          </li>
          <li>
            <Link
              href="/services/commercial/janitorial-services"
              className="text-muted-foreground hover:text-foreground"
            >
              Janitorial Services
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Realtors</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/services/realtor/pre-listing-cleaning" className="text-muted-foreground hover:text-foreground">
              Pre-Listing Cleaning
            </Link>
          </li>
          <li>
            <Link href="/services/realtor/open-house-cleaning" className="text-muted-foreground hover:text-foreground">
              Open House Cleaning
            </Link>
          </li>
          <li>
            <Link
              href="/services/realtor/emergency-cleaning"
              className="text-muted-foreground hover:text-foreground"
            >
              Emergency Cleaning
            </Link>
          </li>
          <li>
            <Link href="/services/realtor/turnkey-service" className="text-muted-foreground hover:text-foreground">
              Turnkey Service
            </Link>
          </li>
          <li>
            <Link href="/services/realtor/staging-cleaning" className="text-muted-foreground hover:text-foreground">
              Staging Cleaning
            </Link>
          </li>
          <li>
            <Link href="/services/realtor/post-construction" className="text-muted-foreground hover:text-foreground">
              Post-Construction Cleaning
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

