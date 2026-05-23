import CookiePopup from "../../components/ui/CookiePopup";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <CookiePopup />
    </>
  );
}