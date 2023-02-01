import Layout from "@/components/shared/Layout";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster />
    </QueryClientProvider>
  );
}
