import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export default config = {
  matcher: ["/", "my-list"],
};
