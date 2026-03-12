import { draftMode } from "next/headers";
import "../styles/globals.css";
import ExitPreviewButton from "@/components/ui/ExitPreviewButton";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode();

  return (
    <html>
      <body>
        {isEnabled && (
          <div className="bg-yellow-500 text-black text-center py-2 text-sm font-bold">
            Режим предпросмотра включен.
            <ExitPreviewButton /> {/* Используем наш новый компонент */}
          </div>
        )}
        {children}
      </body>
    </html>
  );
}