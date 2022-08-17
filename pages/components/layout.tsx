import React from "react";
import { useRouter } from "next/router";
import Header from "./header";
import Search from "./search";

 function Layout({ children }: any) {
  const router = useRouter();
  const path = router.pathname;
  const displayPath =
    path === "/movies" ||
    path === "/now_playing" ||
    path === "/top-rated" ||
    path === "/upcoming"

  return (
    <div className=''>
      {displayPath && <Header />}

      {children}
    </div>
  );
}

export default Layout;