import { useTransition } from "@remix-run/react";

export default function useIsFetching() {
  const { state, type } = useTransition();
  if (state === "idle") return false;
  if (
    [
      "loaderSubmission",
      "loaderSubmissionRedirect",
      "redirect",
      "load",
    ].includes(type)
  )
    return true;
  return false;
}
