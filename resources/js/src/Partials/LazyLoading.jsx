import React, {lazy, Suspense} from "react"; 
 
const lazyLoading  = (importFunc, {fallback = null}) =>{
  const LazyLoader = lazy(importFunc);
  return props => (
    <Suspense  fallback={fallback}>
      <LazyLoader {...props}/>
    </Suspense >
  )
}
export default lazyLoading;