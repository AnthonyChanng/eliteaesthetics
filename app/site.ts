const deploymentUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  "http://localhost:3000";

export const siteUrl = deploymentUrl.startsWith("http")
  ? deploymentUrl
  : `https://${deploymentUrl}`;

export const business = {
  name: "Elite Aesthetics MedSpa",
  phone: "+1-772-202-8668",
  email: "eliteaestheticsfl@gmail.com",
  streetAddress: "1575 Indian River Blvd, Suite C130",
  city: "Vero Beach",
  state: "FL",
  postalCode: "32963",
};
