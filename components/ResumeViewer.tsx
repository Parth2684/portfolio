"use client"

export default function ResumeViewer() {
  return (
    <div className="h-[75vh] w-full">
      <iframe
        title="Resume PDF"
        src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
        className="h-full w-full rounded-lg"
      />
    </div>
  )
}
