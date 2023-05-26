import { IHeader } from '../types'

const Header = ({ handleButtonToggle, buttonToggle }: IHeader) => {
  return (
    <header>
      <nav
        className="relative flex w-full items-center justify-between bg-blue-500 py-2 text-neutral-600 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
        data-te-navbar-ref
      >
        <div className="flex max-w-[1200px] w-full mx-auto flex-wrap items-center justify-between px-3">
          <div
            className="!visible hidden grow basis-[100%] text-white text-xl items-center lg:!flex lg:basis-auto"
          >
            Select your appointment time.
          </div>
          <div>
            <button
              className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full mr-2 w-[225px]"
              onClick={handleButtonToggle}
            >
              {buttonToggle === 'show_all' ? 'Create Appointments' : 'Show All Appointments'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;