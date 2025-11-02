import { Card } from "@/app/component/Card";
import Link from "next/link";

export default function ArchivedPage() {
  return (
    <Card>
      <div>
        Archived notifications
      </div>
      <div>
        <Link href='/complex-dashboard'>Default</Link>
      </div>
    </Card>
  );
}