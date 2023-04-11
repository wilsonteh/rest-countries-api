'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// custom hook which returns the current url pathname and searchParams as a string
// e.g: /?search=malaysia&filter=asia
const useCurrentPath = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const url = pathname + searchParams.toString();
    setUrl(url);

  }, [pathname, searchParams]);

  return url;
}

export default useCurrentPath;