'use client';

import { usePathname } from 'next/navigation';

export default function ExitPreviewButton() {
  const pathname = usePathname();

  return (
    <a 
      href={`/api/exit-preview?callbackUrl=${pathname}`} 
      className="underline ml-2 hover:no-underline"
    >
      Выйти
    </a>
  );
}