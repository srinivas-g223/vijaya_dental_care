import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/sonner";

import Index from "./pages/Index";
import Layout from "./components/site/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster position="top-center" />
    <Layout>
      <Index />
    </Layout>
  </QueryClientProvider>
);

export default App;
