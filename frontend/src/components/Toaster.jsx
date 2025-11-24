import { useToast } from '../hooks/use-toast';
import { X } from 'lucide-react';

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-md">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-[rgb(24,24,27)] border border-[#10B981] rounded-xl p-4 shadow-2xl animate-fadeInUp flex items-start justify-between space-x-4"
        >
          <div className="flex-1">
            {toast.title && (
              <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                {toast.title}
              </h4>
            )}
            {toast.description && (
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {toast.description}
              </p>
            )}
          </div>
          <button
            onClick={() => dismiss(toast.id)}
            className="p-1 hover:bg-[rgba(16,185,129,0.1)] rounded-lg transition-colors"
            style={{ color: 'var(--text-muted)' }}
          >
            <X size={18} />
          </button>
        </div>
      ))}
    </div>
  );
}
