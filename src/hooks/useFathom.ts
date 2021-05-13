import * as Fathom from "fathom-client";
import { useRouter } from "next/router";
import { useEffect } from "react";

const fathomCode = process.env.NEXT_PUBLIC_FATHOM_CODE;
const siteURL = process.env.NEXT_PUBLIC_SITE_URL;

export const useFathom = () => {
  const router = useRouter();

  useEffect(() => {
    if (!fathomCode || !siteURL) return;

    // Initialize Fathom when the app loads
    Fathom.load(fathomCode, {
      url: "https://kiwi.railway.app/script.js",
      includedDomains: [siteURL],
    });

    const onRouteChangeComplete = () => {
      Fathom.trackPageview();
    };
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);
};
