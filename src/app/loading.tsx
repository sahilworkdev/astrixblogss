export default function Loading() {
  return (
    <div className="flex items-center gap-2 justify-center min-h-screen">
      <span className="loader border-t-2 border-green-150 w-6 h-6 rounded-full animate-spin"></span>
      <span className="text-sm font-mulish text-grey-500">Loading...</span>
    </div>
  );
}
