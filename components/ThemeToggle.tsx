import { MoonIcon, Sun } from 'lucide-react'
import { useModeAnimation, ThemeAnimationType } from 'react-theme-switch-animation'

export function ThemeToggle({className}: { className?: string }) {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
    animationType: ThemeAnimationType.CIRCLE
  })

  return (
    <button ref={ref} onClick={toggleSwitchTheme} className={className}>
      {isDarkMode ?  <Sun className='size-5' /> : <MoonIcon className='size-5' />}
    </button>
  )
}