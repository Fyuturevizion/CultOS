import type { MetaFunction } from "@remix-run/cloudflare";
import CultOSSection from "~/components/cultos";

export const meta: MetaFunction = () => {
  return [
    { title: "CultOS" },
    { name: "description", content: "Welcome to CultOS" },
  ];
};

export default function Index() {
  return (
    <div className="text-white relative">
      <CultOSSection />
      {/* <div className="flex flex-col items-center gap-16">
      </div> */}
    </div>
  );
}
