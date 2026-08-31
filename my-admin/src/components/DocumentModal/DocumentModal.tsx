import { useEffect, useRef } from "react"
import "./DocumentModal.scss"

type DocumentModalProps = {
  isOpen: boolean
  title: string
  documentUrl: string
  onClose: () => void
}

export default function DocumentModal({
  isOpen,
  title,
  documentUrl,
  onClose,
}: DocumentModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  return (
    <dialog
      ref={dialogRef}
      className="documentModal"
      aria-labelledby="document-modal-title"
      onClose={onClose}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="documentModal__panel">
        <header className="documentModal__header">
          <h2 id="document-modal-title">{title}</h2>
          <button
            type="button"
            className="documentModal__close"
            onClick={onClose}
            aria-label={`Close ${title}`}
          >
            &times;
          </button>
        </header>
        <iframe
          className="documentModal__viewer"
          src={documentUrl}
          title={title}
        />
        <p className="documentModal__fallback">
          If the document does not display, <a href={documentUrl}>open the PDF directly</a>.
        </p>
      </div>
    </dialog>
  )
}
