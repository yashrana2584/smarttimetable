import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, Trash2 } from "lucide-react";

const variants = {
  danger: {
    icon: <Trash2 size={28} />,
    iconBg: "border border-red-500/20 bg-gradient-to-br from-red-500/20 to-red-600/10",
    iconColor: "text-red-400",
    button:
  "bg-gradient-to-r from-red-600 to-red-500 shadow-lg shadow-red-500/20 hover:from-red-500 hover:to-red-400",
  },
  warning: {
    icon: <AlertTriangle size={28} />,
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
    button: "bg-amber-500 hover:bg-amber-400 text-black",
  },
};

export default function ConfirmDialog({
  open,
  title,
  message,
  confirmText = "Delete",
  cancelText = "Cancel",
  variant = "danger",
  onConfirm,
  onCancel,
}) {
  const style = variants[variant] || variants.danger;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
         className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.2 }}
           className="w-full max-w-md rounded-3xl border border-cyan-500/20 bg-slate-900/90 backdrop-blur-xl p-6 shadow-2xl shadow-cyan-500/10"
          >
            <div
              className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full ${style.iconBg}`}
            >
              <div className={style.iconColor}>{style.icon}</div>
            </div>

            <h2 className="text-center text-2xl font-bold text-white">
              {title}
            </h2>

            <p className="mt-3 text-center leading-relaxed text-slate-300">
              {message}
            </p>

            <div className="mt-8 flex gap-3">
              <button
                onClick={onCancel}
               className="flex-1 rounded-xl border border-slate-700 bg-slate-800/60 py-3 font-medium text-white transition-all duration-300 hover:bg-slate-700/70"
              >
                {cancelText}
              </button>

              <button
                onClick={onConfirm}
               className={`flex-1 rounded-xl py-3 font-semibold text-white transition-all duration-300 ${style.button}`}
              >
                {confirmText}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}