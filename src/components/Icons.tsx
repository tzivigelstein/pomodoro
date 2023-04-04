export const Play = (props: any) => (
  <svg viewBox="0 0 24 24" width="200px" height="200px" {...props}>
    <path d="M8,6.822v10.357c0,0.789,0.871,1.267,1.537,0.844l8.137-5.178c0.618-0.393,0.618-1.294,0-1.687L9.537,5.978 C8.871,5.554,8,6.033,8,6.822z" />
  </svg>
)

export const Pause = (props: any) => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" {...props}>
    <g clipPath="url(#clip0_29_3)">
      <path
        d="M12.5 39.5833H20.8333V10.4166H12.5V39.5833ZM29.1667 10.4166V39.5833H37.5V10.4166H29.1667Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_29_3">
        <rect width="50" height="50" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const Stop = (props: any) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <rect width="16" height="16" rx="1" fill="#FF6347" />
  </svg>
)

export const Settings = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
)

export const Times = (props: any) => (
  <svg
    width={24}
    height={24}
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

export const Reset = (props: any) => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M1 4L1 10 7 10"></path>
    <path d="M3.51 15a9 9 0 102.13-9.36L1 10"></path>
  </svg>
)
