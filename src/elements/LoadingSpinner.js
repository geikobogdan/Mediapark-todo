export function LoadingSpinner({className}) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`inline-block rounded-full border-4 animate-spin spinner-border text-yellow w-10 h-10`}
        role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
