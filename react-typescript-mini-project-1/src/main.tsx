import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

// ✅ TanStack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create the client instance
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={AppRoutes} />
    </QueryClientProvider>
  </>
);
