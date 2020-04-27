import React,{ useEffect } from "react";
    import { useLocation } from "react-router-dom";

// Component that attaches scroll to top hanler on router change
// renders nothing, just attaches side effects
const TopPage = () => {
    
    
      const { pathname } = useLocation();
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    
      return null;
    }

export default TopPage;