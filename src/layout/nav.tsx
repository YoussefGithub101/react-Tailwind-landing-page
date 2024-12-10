 
import {CustomFlowbiteTheme, Navbar } from "flowbite-react";

const customTheme: CustomFlowbiteTheme['navbar'] = {
  "root": {
    "base": "  px-2 py-2.5  sm:px-4",
    "rounded": {
      "on": "rounded",
      "off": ""
    },
    "bordered": {
      "on": "border",
      "off": ""
    },
    "inner": {
      "base": "mx-auto flex flex-wrap lg:flex-nowrap items-center  justify-between",
      "fluid": {
        "on": "",
        "off": "container"
      }
    }
  },
  "brand": {
    "base": "flex items-center"
  },
  "collapse": {
    "base": "w-full lg:block lg:w-auto",
    "list": "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-sm lg:font-medium",
    "hidden": {
      "on": "hidden",
      "off": ""
    }
  },
  "link": {
    "base": "block py-2 pl-3 pr-4 lg:p-0",
    "active": {
      "on": "bg-Primary_color text-white dark:text-white lg:bg-transparent lg:text-Primary_color",
      "off": "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:hover:bg-transparent lg:hover:text-Primary_color lg:dark:hover:bg-transparent lg:dark:hover:text-white"
    },
    "disabled": {
      "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      "off": ""
    }
  },
  "toggle": {
    "base": "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden",
    "icon": "h-6 w-6 shrink-0"
  }
 
};




export default function Nav() {
  return (
 

     <header className='~px-6/36 bg-Neutral-Silver fixed w-full z-50'>
    <Navbar fluid rounded   theme={customTheme}>
    <Navbar.Brand >
      <img src="/Logo.png"   alt="Flowbite React Logo" className="w-24 sm:w-full" />
     </Navbar.Brand>
    <div className="flex lg:order-2">
    <button type="button" className="py-2.5 text-sm px-5 font-medium text-Primary_color" >Login</button>
    <button type="button" className="text-white bg-Brand-Primary hover:bg-Primary_color focus:border-2 focus:border-gray-800 font-medium rounded-md text-sm py-[0.625rem] px-[1.25rem] text-center  ">Sign up</button>
      <Navbar.Toggle className='ml-2' />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="#" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="#">Services</Navbar.Link>
      <Navbar.Link href="#">Feature</Navbar.Link>
      <Navbar.Link href="#">Pricing</Navbar.Link>
      <Navbar.Link href="#">Product</Navbar.Link>
      <Navbar.Link href="#">Testimonial</Navbar.Link>
      <Navbar.Link href="#">FAQ</Navbar.Link>
     </Navbar.Collapse>
  </Navbar>
     </header>

  )
}
