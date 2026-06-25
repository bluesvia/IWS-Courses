export const trackEvent = (eventName: string, data?: Record<string, any>) => {
  console.log(`[Tracking Event] ${eventName}`, data || {});
  // In a real app, this would push to dataLayer, fbq, GA4, etc.
  // window.dataLayer = window.dataLayer || [];
  // window.dataLayer.push({ event: eventName, ...data });
};
