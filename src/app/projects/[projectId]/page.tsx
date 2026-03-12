import SingleProjectPage from "@/pages/singleProject/SingleProjectPage";
import { Suspense } from "react";

export async function generateStaticParams() {
  return [
    { projectId: "usinsk" },
    { projectId: "surgut" },
    { projectId: "moscow" },
    { projectId: "kazan" },
    { projectId: "engels" },
    { projectId: "saratov" },
    { projectId: "astana" },
    { projectId: "orenburg" },
    { projectId: "rostov-on-don" },
    { projectId: "krasnodar" },
    { projectId: "koshehabl" },
    { projectId: "grozniy" },
    { projectId: "surgut" },
    { projectId: "novorossijsk" },
  ];
}

const Page = async ({ params }: { params: Promise<{ projectId: string }> }) => {
  const { projectId } = await params;
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <SingleProjectPage projectId={projectId} />
    </Suspense>
  );
};

export default Page;
