import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-2">
          <a
            href={siteConfig.links.privacyPolicy}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              variant: "ghost",
            })}
          >
            Privacy Policy
          </a>
          <a
            href={siteConfig.links.termsOfService}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              variant: "ghost",
            })}
          >
            Terms of Service
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <a
            href={siteConfig.links.facebook}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              variant: "ghost",
            })}
          >
            <Icons.google className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              variant: "ghost",
            })}
          >
            <Icons.apple className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
