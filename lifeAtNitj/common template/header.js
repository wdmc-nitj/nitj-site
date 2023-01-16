document.write(`

<div class=" z-50 p-0 top-0 flex items-start justify-start h-full w-full z-10 fixed bg-transparent backdrop-blur-2xl"
id="nav-menu" style="display: none">
<div id="menu" class="h-screen w-3/4 z-10 relative" onclick="close_menu();">
  <div class="menu-content w-3/4 z-40 bg-accent h-full relative" onclick="keep_menu_open();z=1;">
    <div class="top-bar h-1/6">
      <div class="menu-btn z-50 flex justify-end py-4 px-4" onclick="z=0;close_menu();">
        <div class="line bg-white w-[20px] h-[2px] rotate-45 absolute"></div>
        <div class="line bg-white w-[20px] h-[2px] -rotate-45"></div>
      </div>
    </div>
    <button id="dropdown-button" data-dropdown-toggle="dropdown"
      class="z-10 w-full inline-flex flex-shrink-0 items-center border border-gray-300 bg-gray-100 py-2.5 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
      type="button" onclick="openDropdown()">
      Administration
      <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"></path>
      </svg>
    </button>
    <div id="dropdown"
      class="absolute z-10 w-full hidden divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700"
      data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
        <li>
          <button id="dropdown-button" data-dropdown-toggle="dropdown"
            class="z-10 w-full inline-flex flex-shrink-0 items-center border border-gray-300 bg-gray-100 py-2.5 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            type="button" onclick="openDropdown2()">
            About Us
            <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <div id="dropdown2"
            class="absolute z-10 w-full hidden divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700"
            data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
              <li>
                <button type="button"
                  class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Vision, Mission & Quality Values
                </button>
              </li>
              <li>
                <button type="button"
                  class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Virtual Tour
                </button>
              </li>
              <li>
                <button type="button"
                  class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Institute History
                </button>
              </li>
              <li>
                <button type="button"
                  class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Explore NITJ
                </button>
              </li>
              <li>
                <button type="button"
                  class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  NITJ Rankings & Awards
                </button>
              </li>
              <li>
                <button type="button"
                  class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Institute Prospectus
                </button>
              </li>
              <li>
                <button type="button"
                  class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Location
                </button>
              </li>
            </ul>
          </div>
      </ul>
      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
        <li>
          <button id="dropdown-button" data-dropdown-toggle="dropdown"
            class="z-10 w-full inline-flex flex-shrink-0 items-center border border-gray-300 bg-gray-100 py-2.5 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            type="button" onclick="openDropdown3()">
            Leadership
            <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <div id="dropdown3"
            class="absolute z-10 w-full hidden divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700"
            data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
              <li>
                <button type="button"
                  class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Organizational Chart
                </button>
              </li>
              <li>
                <button type="button"
                  class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Chairperson
                </button>
              </li>
              <li>
                <button type="button"
                  class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Director
                </button>
              </li>
              <li>
                <button type="button"
                  class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Registrar
                </button>
              </li>
              <li>
                <button type="button"
                  class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Academic administration
                </button>
              </li>
              <li>
                <button type="button"
                  class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Student Welfare
                </button>
              </li>
              <li>
                <button type="button"
                  class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Faculty Welfare
                </button>
              </li>
              <li>
                <button type="button"
                  class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Planning and Development
                </button>
              </li>
              <li>
                <button type="button"
                  class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Research and Consultancy
                </button>
              </li>
              <li>
                <button type="button"
                  class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  International Affairs
                </button>
              </li>
              <li>
                <button type="button"
                  class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Hostel Administration
                </button>
              </li>
            </ul>
          </div>
      </ul>
    </div>
    <div
      class="extra-links absolute bottom-1.5 left-0 w-full select-none flex flex-col align-middle justify-center">
      <a class="text-center text-white" href="/">Privacy Policy</a>

      <a class="text-center text-white" href="/">Terms & conditions</a>
    </div>
  </div>
</div>
</div>




<header class="fixed bg-white top-0 right-0 left-0 z-40">
<!-- TOP NAV BAR stats -->
<div id="top_bar"
  class="absolute top-0 right-0 left-0 transition-transform delay-200 h-7 bg-accent py-0.5 px-2 sm:px-12 text-xs uppercase text-white shadow-md">
  <div class="container mx-auto flex flex-row justify-between">
    <div class="basis-1/2">
      <div class="flex flex-row justify-center gap-4 sm:gap-6">
        <div class="flex items-center">
          <span class="material-symbols-outlined" style="
                font-variation-settings: 'FILL' 0, 'wght' 200, 'grad' 0,
                  'opzs' 40;
              ">
            engineering
          </span>
          <a href="" class="hidden sm:block pl-1.5 text-xs">Jobs</a>
        </div>
        <div class="flex items-center">
          <span class="material-symbols-outlined" style="
                font-variation-settings: 'FILL' 0, 'wght' 200, 'grad' 0,
                  'opzs' 40;
              ">
            add_business
          </span>
          <a href="" class="hidden sm:block pl-1.5 text-xs">Tenders</a>
        </div>
        <div class="flex items-center">
          <span class="material-symbols-outlined" style="
                font-variation-settings: 'FILL' 0, 'wght' 200, 'grad' 0,
                  'opzs' 40;
              ">
            badge
          </span>
          <a href="https://placement-q1bq.onrender.com/" class="hidden sm:block pl-1.5 text-xs">Placements</a>
        </div>
        <div class="flex items-center">
          <span class="material-symbols-outlined" style="
                font-variation-settings: 'FILL' 0, 'wght' 200, 'grad' 0,
                  'opzs' 40;
              ">
            event_note
          </span>
          <a href="" class="hidden sm:block pl-1.5 text-xs">Resources</a>
        </div>
        <div class="flex items-center">
          <span class="material-symbols-outlined" style="
                font-variation-settings: 'FILL' 0, 'wght' 200, 'grad' 0,
                  'opzs' 40;
              ">
            psychology_alt
          </span>
          <a href="" class="hidden sm:block pl-1.5 text-xs">Help</a>
        </div>
      </div>
    </div>
    <div class="basis-1/2 sm:pl-8 pl-1">
      <div class="flex flex-row gap-4 justify-between">
        <div class="hidden sm:flex basis-1/6 gap-4 flex-row items-center">
          <a href="https://www.facebook.com/NITJofficial"><i class="fa-brands fa-facebook text-lg"></i></a>
          <a href="https://www.instagram.com/nitjofficial/"><i class="fa-brands fa-instagram text-lg"></i></a>
          <a href="https://twitter.com/NITJofficial"><i class="fa-brands fa-twitter text-lg"></i></a>
        </div>
        <div class="flex sm:basis-1/3 basis-1/2 justify-center items-center">
          <span class="material-symbols-outlined" style="
                font-variation-settings: 'FILL' 0, 'wght' 200, 'grad' 0,
                  'opzs' 40;
              ">
            g_translate
          </span>
          <a href="" class="hidden sm:block pl-1">हिन्दी / <span class="text-lg">A</span>+A-</a>
        </div>
        <div class="flex sm:basis-1/3 basis-1/2 justify-center items-center">
          <span class="material-symbols-outlined" style="
                font-variation-settings: 'FILL' 0, 'wght' 200, 'grad' 0,
                  'opzs' 40;
              ">
            contacts
          </span>
          <a href="" class="hidden sm:block pl-1.5 text-xs">ERP</a>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- top nav bar ends -->
<!-- INSTITUTE LOGO & NAME starts -->
<div
  class="relative sm:px-0 px-20 sm:w-full container p-0 left-[10px] sm:left-0 h-14 max-h-14 sm:h-max sm:max-h-max">
  <div class="mySlides mt-7">
    <div class="align-center flex flex-row justify-end sm:justify-between bg-white py-2.5">
      <div
        class="institute_name sm:max-w-lg sm:basis-1/2 justify-start text-center sm:text-lg font-semibold uppercase hidden sm:block">
        <p>Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR</p>
      </div>
      <div
        class="institute_name flex sm:max-w-lg sm:basis-1/2 justify-end sm:px-16 text-center text-sm sm:text-xl font-bold uppercase">
        <p>डॉ बी आर अंबेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर</p>
      </div>
    </div>
  </div>
  <div class="mySlides mt-7">
    <div class="align-center flex flex-row justify-end sm:justify-between bg-white py-2.5">
      <div
        class="institute_name sm:max-w-lg sm:basis-1/2 justify-center px-16 text-center sm:text-xl font-bold uppercase hidden sm:block">
        <p>डॉ बी आर अंबेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर</p>
      </div>
      <div
        class="institute_name flex sm:max-w-lg sm:basis-1/2 justify-center sm:px-8 text-center text-sm sm:text-xl font-bold uppercase">
        <p>ਡਾ ਬੀ ਆਰ ਅੰਬੇਡਕਰ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਟੈਕਨਾਲੋਜੀ ਜਲੰਧਰ</p>
      </div>
    </div>
  </div>
  <div class="mySlides mt-7">
    <div class="align-center flex flex-row justify-end sm:justify-between bg-white py-2.5">
      <div
        class="institute_name sm:max-w-lg sm:basis-1/2 justify-center px-8 text-center sm:text-xl font-bold uppercase hidden sm:block">
        <p>ਡਾ ਬੀ ਆਰ ਅੰਬੇਡਕਰ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਟੈਕਨਾਲੋਜੀ ਜਲੰਧਰ</p>
      </div>
      <div
        class="institute_name flex sm:max-w-lg sm:basis-1/2 justify-center text-center text-xs sm:text-lg font-semibold uppercase">
        <p>Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR</p>
      </div>
    </div>
  </div>
</div>
<!-- INSTITUTE LOGO & NAME ends -->
<!-- Logo CONTAINER starts -->
<div
  class="absolute hidden sm:block left-[50px] z-40 mx-auto -translate-x-1/2 -translate-y-1/3 sm:translate-y-0 scale-75 sm:scale-100 sm:left-1/2"
  style="width: 230px">
  <img src="img/Rectangle 47 (1).png" alt="" />
</div>
<div id="logo_250"
  class="absolute h-[120px] aspect-square left-[50px] sm:left-1/2 scale-[0.40] sm:scale-100 -translate-y-1/3 top-9 sm:top-7 sm:translate-y-0 z-40 -translate-x-1/2 sm:py-0">
  <img src="img/logo_250.png" alt="" />
</div>
<!-- Logo CONTAINER ends -->
<!-- NAV BAR starts-->


<div class="sm:block bg-accent drop-shadow-lg z-40">
  <div class="container">
    <div class="z-40 flex h-7 sm:h-10 max-w-screen px-4 flex-row justify-between bg-accent text-lg text-white">
      <div class="flex items-center sm:hidden" onclick="open_menu();">
        <span class="material-symbols-outlined"
          style='font-variation-settings: "FILL" 0, "wght" 200, "grad" 0, "opzs" 40;'> menu </span>
      </div>
      <div class="sm:hidden block">
        <button type="button"
          class="block material-symbols-outlined duration-50 cursor-pointer text-center transition ease-in-out hover:box-border sm:hover:h-10 sm:hover:w-10 hover:rounded-full hover:border-2 hover:border-accent"
          data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tap to search" onclick="showSearchPage(event)">
          search
        </button>
      </div>
      <div class="basis-2/5 hidden sm:block">
        <div class="flex w-full flex-row justify-between px-10">
          <div class="group cursor-default hover:bg-blue-800">
            <div class="p-1.5 font-medium uppercase">Administration</div>
            <div id="drop-down"
              class="absolute mt-0.5 hidden gap-5 bg-white p-5 text-sm shadow-sm group-hover:flex">
              <div class="flex flex-col gap-5 items-center">
                <div id="col"
                  class="flex flex-col w-52 gap-5 border-2 rounded-b-xl border-accent hover:bg-orange-500 hover:border-orange-500 ">
                  <div id="block" class="h-full">
                    <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent hover:bg-orange-500">
                      <div class="p-2 text-center"><a href='/admin/index.html'>ABOUT US</a></div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            <a href="/admin/index.html#vision-mission">Vision, Mission & Quality Policy</a>
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Virtual Tour
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Institute History
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Explore NITJ
                          </li>
                          <li class="hover:text-[#FF6600]">
                            NITJ Rankings & Awards
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Institute Prospectus
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Location
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <img src="img/logo_250.png" alt="" style="width: 100px;" />
              </div>
              <div id="col"
                class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:border-orange-500 hover:bg-orange-500">
                <div id="block" class="h-full">
                  <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent hover:bg-orange-500">
                    <div class="p-2 text-center">LEADERSHIP</div>
                    <div class="h-full rounded-b-xl bg-white">
                      <ul class="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                        <li class="hover:text-[#FF6600]">
                          Organisational Chart
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Chariperson
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Director
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Registrar
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Academic administration
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Student Welfare
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Faculty Welfare
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Planning and Development
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Research and Consultancy
                        </li>
                        <li class="hover:text-[#FF6600]">
                          International Affairs
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Hostel Administration
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div id="col"
                class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:border-orange-500 hover:bg-orange-500">
                <div id="block" class="h-full">
                  <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent hover:bg-orange-500">
                    <div class="p-2 text-center">GOVERNING BODIES</div>
                    <div class="h-full rounded-b-xl bg-white">
                      <ul class="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                        <li class="hover:text-[#FF6600]">
                          NIT Council
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Board of Governors
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Senate
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Standing Committee of the Senate
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Finance Committee
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Building and Works Committee
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div id="col"
                class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                <div id="block" class="h-full">
                  <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                    <div class="p-2 text-center">CELLS</div>
                    <div class="h-full rounded-b-xl bg-white">
                      <ul class="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                        <li class="hover:text-[#FF6600]">
                          E-Cell
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Equal Opportunities and
                          SC/ST/OBC/PwD cell
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Rajbhasha Cell
                        </li>
                        <li class="hover:text-[#FF6600]">
                          RTI Cell
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Student Grievances Cell
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Faculty Grievances Cell
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Staff Grievances Cell
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Public Grievances
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Women Cell
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div id="col"
                class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                <div id="block" class="h-full">
                  <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                    <div class="p-2 text-center">COMMITTEES</div>
                    <div class="h-full rounded-b-xl bg-white">
                      <ul class="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                        <li class="hover:text-[#FF6600]">
                          Institute Development
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Internal Complaint
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Print, Digital Media and Newsletter
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Social Media
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Website Development and Management
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="group cursor-default hover:bg-blue-800">
            <div class="p-1.5 font-medium uppercase">Academics</div>
            <div id="drop-down"
              class="absolute mt-0.5 hidden -translate-x-28 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex">
              <div id="col"
                class="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                <div id="block" class="h-full">
                  <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                    <div class="p-2 text-center">DEPARTMENTS</div>
                    <div class="h-full rounded-b-xl bg-white">
                      <ul class="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                        <li class="hover:text-[#FF6600]">
                          Biotechnology
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Chemistry
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Chemical Engineering
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Civil Engineering
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Computer Science and Engineering
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Electronics and Communication Engineering
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Electrical Engineering
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Humanities and Management
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Industrial and Production Engineering
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Information Technology
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Instrumentation and Control Engineering
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Mathematics
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Mechanical Engineering
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Physics
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Textile Technology
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-5">
                <div id="col"
                  class="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                      <div class="p-2 text-center">CENTERS</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            Center for Energy and Environment
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Center for Artificial Intelligence
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Center for Continuing Education
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="col"
                  class="h-full flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                      <div class="p-2 text-center">ACADEMIC SYSTEM</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            Academic Circulars & Notices
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Academic Calender
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Academic Regulations
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Curriculum
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Fee Structure
                          </li>
                          <li class="hover:text-[#FF6600]">
                            System of Evaluation and Grant of Division
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Standard Operationg Procedures (SOP)
                          </li>
                          <li class="hover:text-[#FF6600]">
                            UMC Rules
                          </li>
                          <li class="hover:text-[#FF6600]">
                            General FAQs
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-5">
                <div id="col"
                  class="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                      <div class="p-2 text-center">ACADEMIC SERVICES</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            Student Portal LOGIN
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Grade Sheets
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Timetable
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Upcoming Examination Schedules
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Results
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Online Application for Transcripts and Certificates
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Online Application for Verification of Degree
                          </li>
                          <li class="hover:text-[#FF6600]">
                            CGPA Criteria and Medium of Education
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Other Proformas
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Contact Details
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="col"
                  class="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head" class="h-full rounded-b-xl overflow-clip bg-accent  hover:bg-orange-500">
                      <div class="p-2 text-center">ACADEMIC FACILITIES</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            Central Library
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Computer Center
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Central Workshop
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Institute Instrumentation Center
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-5">
                <div id="col"
                  class="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                      <div class="p-2 text-center">PROGRAMMERS OF STUDY</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            Bachelor of Technology
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Master of Technology
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Master of Business Administration
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Master of Science
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Post Graduate Diploma
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Doctor of Philosophy
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="col"
                  class="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                      <div class="p-2 text-center">CONVOCATION</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            Convocation 2022
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Past Convocations
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="col"
                  class="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                      <div class="p-2 text-center">OTHER LINKS</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            UGC Act- Rules and Regulations
                          </li>
                          <li class="hover:text-[#FF6600]">
                            NIT Act and Statutes
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Ministry of Education Notifications
                          </li>
                          <li class="hover:text-[#FF6600]">
                            National Education Policy 2020
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="group cursor-default hover:bg-blue-800">
            <div class="p-1.5 font-medium uppercase">Admissions</div>
            <div id="drop-down"
              class="absolute mt-0.5 hidden -translate-x-1/3 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex">
              <div class="flex flex-col gap-5">
                <div id="col"
                  class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                      <div class="p-2 text-center">PROSPECTIVE STUDENTS</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            Why NITJ?
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Explore NITJ
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Discover Student Life
                          </li>
                          <li class="hover:text-[#FF6600]">
                           <a href="./admissions/courses_offered.html" target="_blank"> Courses Offered </a>
                          </li>
                          <li class="hover:text-[#FF6600]">
                            How to Apply
                          </li>
                          <li class="hover:text-[#FF6600]">
                           <a href="./admissions/admission_procedure.html" target="_blank"> Admissions Process </a>
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Virtual Tour
                          </li>
                          <li class="hover:text-[#FF6600]">
                           <a href="./admissions/foreign.html" target="_blank"> International Students </a>
                          </li>
                          <li class="hover:text-[#FF6600] md:font-bold py-2">
                            Contact Details for Admission
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="col"
                  class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                      <div class="p-2 text-center">ANTI RAGGING</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            Anti Ragging Act
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Anti Ragging Affadvit
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Institute Anti-ragging Rules
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-5">
                <div id="col"
                  class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                      <div class="p-2 text-center">JOIN NITJ</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            <a href="/admissions/index.html">B.Tech Admission</a>
                          </li>
                          <li class="hover:text-[#FF6600]">
                            <a href="/admissions/mtech_ccmt.html">M.Tech Admission</a>
                          </li>
                          <li class="hover:text-[#FF6600]">
                            <a href="/admissions/msc.html">Msc Admission</a>
                          </li>
                          <li class="hover:text-[#FF6600]">
                            <a href="/admissions/mba.html">MBA Admission</a>
                          </li>
                          <li class="hover:text-[#FF6600]">
                            <a href="/admissions/phd.html">Ph.D Admission</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="col"
                  class="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                      <div class="p-2 text-center">&ThinSpace; INSTITUTE PROSPECTUS &ThinSpace;</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            <a href="/admissions/admission_procedure.html">B.Tech</a>
                          </li>
                          <li class="hover:text-[#FF6600]">
                            <a href="./admissions/src/prospectus.pdf"  target="_blank"> M.Tech </a>
                          </li>
                          <li class="hover:text-[#FF6600]">
                            <a href="./admissions/src/prospectus.pdf"  target="_blank"> M.Sc. </a>
                          </li>
                          <li class="hover:text-[#FF6600]">
                            <a href="./admissions/src/prospectus.pdf"  target="_blank">MBA </a>
                          </li>
                          <li class="hover:text-[#FF6600]">
                            <a href="./admissions/src/prospectus.pdf"  target="_blank"> Ph.D </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="basis-2/5 hidden sm:block w-full">
        <div class="flex w-full flex-row justify-between">
          <div class="basis-4/5">
            <div class="flex flex-row justify-between">
              <div class="group cursor-default hover:bg-blue-800">
                <div class="p-1.5 font-medium uppercase">Research</div>
                <div id="drop-down"
                  class="absolute mt-0.5 hidden -translate-x-1/2 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex">
                  <div class="flex flex-col gap-5">
                    <div id="col"
                      class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                          <div class="p-2 text-center">RESEARCH @ NITJ</div>
                          <div class="h-full rounded-b-xl bg-white">
                            <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                              <li class="hover:text-[#FF6600]">
                              <a href="https://vidwan.inflibnet.ac.in/searchc/search" target="_blank">  VIDWAN (IRINS Instance) </a>
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Research Publications
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Research Jobs
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Internships
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Sponsored Research Projects
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="col"
                      class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                          <div class="p-2 text-center">INCUBATION @ NITJ</div>
                          <div class="h-full rounded-b-xl bg-white">
                            <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                              <li class="hover:text-[#FF6600]">
                                STI Hub
                              </li>
                              <li class="hover:text-[#FF6600]">
                                E-Cell
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Innovation Club
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Institute Innovation Council
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Technology Business Incubator
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col gap-5">
                    <div id="col"
                      class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                          <div class="p-2 text-center">CONSULTANCY @ NITJ</div>
                          <div class="h-full rounded-b-xl bg-white">
                            <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                              <li class="hover:text-[#FF6600]">
                                Consultancy works
                              </li>
                              <li class="hover:text-[#FF6600]">
                                <a href="/research/mous.html">MoUs</a>
                              </li>
                              <li class="hover:text-[#FF6600]">
                                IPRs
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Find an Expert
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Central Research facilities
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="col"
                      class="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                          <div class="p-2 text-center">UPCOMING EVENTS</div>
                          <div class="h-full rounded-b-xl bg-white">
                            <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                              <li class="hover:text-[#FF6600]">
                                Conferences
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Seminars
                              </li>
                              <li class="hover:text-[#FF6600]">
                                STC/ FDP
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Workshops
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="group cursor-default hover:bg-blue-800">
                <div class="p-1.5 font-medium uppercase">Alumni</div>
                <div id="drop-down"
                  class="absolute mt-0.5 hidden -translate-x-1/2 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex">
                  <div id="col"
                    class="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                    <div id="block" class="h-full">
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 py-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            <a href="/alumni/alumni.html">Alumni Portal</a>
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Alumni Registration
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Chapters
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Donation statistics and Reports
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Give Back
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Impact
                          </li>
                          <li class="hover:text-[#FF6600] py-2 md:font-bold">
                            Alumni Affairs Contact Details
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="group relative cursor-default hover:bg-blue-800">
                <div class="p-1.5 font-medium uppercase">Life at NITJ</div>
                <div id="drop-down"
                  class="absolute mt-0.5 hidden gap-5 self-center  bg-white p-5 text-sm shadow-sm group-hover:flex right-0">
                  <div class="flex flex-col gap-5">
                    <div id="col"
                      class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                          <div class="p-2 text-center">CLUBS & SOCITIES</div>
                          <div class="h-full rounded-b-xl bg-white">
                            <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                              <a href="/clubs/yoga.html" class="hover:text-[#FF6600]">
                                Heartfulness Mediation Club
                              </a>
                              <a href="/clubs/prayas.html" class="hover:text-[#FF6600]">
                                Prayaas - A Campaign for Smile
                              </a>
                              <a href="/clubs/rtist.html" class="hover:text-[#FF6600]">
                                R-Tist Robotics Club
                              </a>
                              <a href="/clubs/spic.html" class="hover:text-[#FF6600]">
                                SPIC MACAY
                              </a>
                              <a href="/clubs/we-can.html" class="hover:text-[#FF6600]">
                                “We Can” Club
                              </a>
                              <a href="/clubs/yoga.html" class="hover:text-[#FF6600]">
                                Yoga Club
                              </a>
                            </ul>
                            <ul class="flex flex-row px-2 font-normal text-black justify-between">
                              <a href="/clubs/zeal.html" class="hover:text-[#FF6600]">
                                Zeal Society
                              </a>
                              <li class="hover:text-[#FF6600] font-bold">
                                View All
                              </li>
                            </ul>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="col"
                      class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                          <div class="p-2 text-center">SCHOLARSHIPS</div>
                          <div class="h-full rounded-b-xl bg-white">
                          <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <a href="https://www.nitj.ac.in/index.php/newOnNitj/scholar_detail/4" class="hover:text-[#FF6600]">
                          Activity Schedule for Post Matric Scholarship (Ashirwad) for Academic Year 2016-17
                          </a>
                          <a href="https://www.nitj.ac.in/index.php/newOnNitj/scholar_detail/6" class="hover:text-[#FF6600]">
                          2nd MCM Scholarship Announcement
                            </a>
                          <a href="https://www.nitj.ac.in/index.php/newOnNitj/scholar_detail/7" class="hover:text-[#FF6600]">
                          Dr Partap Singh Memorial Scholarships
                            </a>
                        </ul>
                        <ul class="flex flex-row px-2 font-normal text-black justify-between">
                        <a href="https://www.nitj.ac.in/index.php/newOnNitj/scholar_detail/9" class="hover:text-[#FF6600]">
                        Post Matric Scholarship for the year 2016-17
                            </a>
                          <li class="hover:text-[#FF6600] font-bold whitespace-nowrap self-end">
                            View All
                          </lo>
                        </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col gap-5">
                    <div id="col"
                      class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                          <div class="p-2 text-center">CAMPUS AMENITIES</div>
                          <div class="h-full rounded-b-xl bg-white">
                            <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                              <a href="/lifeAtNitj/CampusAmenities.html#Banks & ATMs" class="hover:text-[#FF6600]">
                                Banks & ATMs
                              </a>
                              <a href="/lifeAtNitj/CampusAmenities.html#Canteen & Shops" class="hover:text-[#FF6600]">
                                Canteens & Shops
                              </a>
                              <a href="/lifeAtNitj/CampusAmenities.html#Center Seminar Hall" class="hover:text-[#FF6600]">
                                Central Seminar Hall
                                </a>
                                <a href="/lifeAtNitj/CampusAmenities.html#Daily Commute" class="hover:text-[#FF6600]">
                                Daily Commute
                                </a>
                              <a href="/lifeAtNitj/CampusAmenities.html#Open Air Theater"  class="hover:text-[#FF6600]">
                                Open Air Theater
                                </a>
                              <a href="/lifeAtNitj/CampusAmenities.html#Post Office"  class="hover:text-[#FF6600]">
                                Post Office
                                </a>
                              <a href="/lifeAtNitj/CampusAmenities.html#Student Center" class="hover:text-[#FF6600]">
                                Students Actvity Center
                                </a>
                              <a href="/lifeAtNitj/CampusAmenities.html#Wi-Fi Campus"  class="hover:text-[#FF6600]">
                                Wi-Fi Campus
                                </a>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="col"
                      class="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                          <div class="p-2 text-center">HEALTH AND WELNESS</div>
                          <div class="h-full rounded-b-xl bg-white">
                            <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                            <a href="/lifeAtNitj/HealthAndWellness.html#COUNSELLING SERVICES"  class="hover:text-[#FF6600]">
                                Counselling Services
                                </a>
                              <a href="/lifeAtNitj/HealthAndWellness.html#FIT INDIA MOVEMENT"  class="hover:text-[#FF6600]">
                                Fit India Movement Campaign
                                </a>
                              <a href="/lifeAtNitj/HealthAndWellness.html#GYMNASIUM"  class="hover:text-[#FF6600]">
                                Gymnasium Center and Open Gyms
                                </a>
                              <a href="/lifeAtNitj/HealthAndWellness.html#HEALTH CARE CENTRE"  class="hover:text-[#FF6600]">
                                Health Care Center
                                </a>
                              <a href="/lifeAtNitj/HealthAndWellness.html#Empanaelled"  class="hover:text-[#FF6600]">
                                Empanaelled Hospitals
                                </a>
                              <a href="/lifeAtNitj/HealthAndWellness.html#Sports"  class="hover:text-[#FF6600]">
                                Sports and Recreation
                                </a>
                              <a href="/lifeAtNitj/HealthAndWellness.html#STUDENT GRIEVANCE CELL"  class="hover:text-[#FF6600] font-bold">
                                Student Grievence Cell
                                </a>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col gap-5 items-center">
                    <div id="col"
                      class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                          <div class="p-2 text-center">NITJ FESTIVALS</div>
                          <div class="h-full rounded-b-xl bg-white">
                            <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                              <a href="/clubs/bharat_dhwani.html" class="hover:text-[#FF6600]">
                                Foundation Day
                              </a>
                              <a href="/clubs/cultural.html" class="hover:text-[#FF6600]">
                                Annual Cultural Fest
                              </a>
                              <a href="/clubs/tech_fest.html" class="hover:text-[#FF6600]">
                                Annual Technical Fest
                              </a>
                              <a href="/clubs/athletic_fest.html" class="hover:text-[#FF6600]">
                                Athletic Fest
                              </a>
                              <a href="/clubs/sports.html" class="hover:text-[#FF6600]">
                                Sports Tournaments
                              </a>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="col"
                      class="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head" class="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                          <div class="p-2 text-center">ACCOMODATION</div>
                          <div class="h-full rounded-b-xl bg-white">
                            <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                              <a href="/lifeAtNitj/hostel.html" class="hover:text-[#FF6600]">
                                Boys Hostel
                              </a>
                              <a href="/lifeAtNitj/hostel.html" class="hover:text-[#FF6600]">
                                Girls Hostel
                              </a>
                              <a href="/lifeAtNitj/hostel.html" class="hover:text-[#FF6600]">
                                Hostel Guest House
                              </a>
                              <a href="/lifeAtNitj/hostel.html" class="hover:text-[#FF6600]">
                                Institute Guest House
                              </a>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img src="img/logo_250.png" alt="" style="width: 100px;" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex basis-1/5 flex-row justify-center">
            <button type="button"
              class="material-symbols-outlined duration-50 cursor-pointer text-center transition ease-in-out hover:box-border hover:h-10 hover:w-10 hover:rounded-full hover:border-2 hover:border-accent"
              data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tap to search"
              onclick="showSearchPage(event)">
              search
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- NAV BAR ends-->
</header>



<div id="search_page" class="absolute top-0 z-50 hidden h-full w-full content-center bg-transparent backdrop-blur-2xl"
onclick="showSearchPage(event)">
<form id="search_form" onclick="showSearchPage(event)">
  <div class="flex px-28">
    <label for="search-dropdown" class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
      Email</label>
    <button id="dropdown-button" data-dropdown-toggle="dropdown"
      class="z-10 inline-flex flex-shrink-0 items-center rounded-l-lg border border-gray-300 bg-gray-100 py-2.5 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
      type="button" onclick="openDropdown()">
      All categories
      <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"></path>
      </svg>
    </button>
    <div id="dropdown"
      class="absolute z-10 hidden w-44 translate-y-11 divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700"
      data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
        <li>
          <button type="button"
            class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Faculty
          </button>
        </li>
        <li>
          <button type="button"
            class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Links
          </button>
        </li>
        <li>
          <button type="button"
            class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Library
          </button>
        </li>
        <li>
          <button type="button"
            class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Research
          </button>
        </li>
        <li>
          <button type="button"
            class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Everything
          </button>
        </li>
      </ul>
    </div>
    <div class="relative w-full">
      <input type="search" id="search-dropdown"
        class="z-20 block w-full rounded-r-lg border border-l-2 border-gray-300 border-l-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
        placeholder="Search Faculty, Books, Events, Researches..." required="" />
      <button type="submit"
        class="absolute top-0 right-0 rounded-r-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
    </div>
  </div>
</form>
</div>
`)