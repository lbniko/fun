import { notFound } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};

export default function Page({ params }: PageProps) {
  if (params.id !== "expected-value") {
    notFound();
  }

  return <div>{params.id}</div>;
}