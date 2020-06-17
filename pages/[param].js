import { useRouter } from "next/router";

function Page() {
  const { query } = useRouter();

  return `Query: ${query.param}`;
}

export default Page;
