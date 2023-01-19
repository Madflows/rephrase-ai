import Layout from "@/components/shared/Layout";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
