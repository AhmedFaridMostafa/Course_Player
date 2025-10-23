import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PdfDialogProps {
  title: string;
  pdfUrl: string;
  trigger: React.ReactNode;
}

const PdfDialog = ({ title, pdfUrl, trigger }: PdfDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full">{trigger}</DialogTrigger>
      <DialogContent className="max-w-4xl lg:max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
          <DialogDescription className="hidden" />
        </DialogHeader>
        <div className="w-full h-[600px] border rounded-lg overflow-hidden">
          <iframe
            src={pdfUrl}
            className="w-full h-full"
            title={`PDF Viewer - ${title}`}
            loading="lazy"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PdfDialog;
