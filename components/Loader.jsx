function Loader({ text }) {
  return <div className="flex items-center gap-3">
    <span className="w-5 h-5 rounded-full border-2 border-slate-700 animate-spin border-t-slate-300"></span>
    <span className="sr-only">{text}</span>
  </div>;
}


export default Loader
