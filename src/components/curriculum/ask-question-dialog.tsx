"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface AskQuestionDialogProps {
  storageKey?: string;
  trigger?: React.ReactNode;
  onSubmit?: (question: string) => void;
}

export function AskQuestionDialog({
  storageKey = "ask-question-draft",
  trigger,
  onSubmit,
}: AskQuestionDialogProps) {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");

  // Load draft when dialog opens
  useEffect(() => {
    if (!open) return;

    const saved =
      typeof window !== "undefined" ? localStorage.getItem(storageKey) : null;
    if (saved) setQuestion(saved);
  }, [open, storageKey]);

  // Persist draft as user types
  useEffect(() => {
    if (question?.trim().length) {
      localStorage.setItem(storageKey, question);
    } else {
      localStorage.removeItem(storageKey);
    }
  }, [question, storageKey]);

  const handleSubmit = () => {
    const trimmed = question.trim();
    if (!trimmed) return;
    onSubmit?.(trimmed);
    localStorage.removeItem(storageKey);
    setQuestion("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger ? <DialogTrigger asChild>{trigger}</DialogTrigger> : null}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ask a question</DialogTitle>
        </DialogHeader>
        <div className="grid gap-2">
          <label htmlFor="question" className="text-sm text-muted-foreground">
            Your question:
          </label>
          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="min-h-28 w-full rounded-md border bg-background p-3 focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <DialogDescription>
          Your draft is saved automatically and restored if you close
          accidentally.
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleSubmit} disabled={!question.trim().length}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
