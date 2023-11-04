import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/ArionManagementLogo2.png';
import { useState } from 'react';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='relative overflow-hidden bg-orange-700 h-screen'>
          <nav className='relative py-6 mb-12 sm:mb-32 bg-white'>
            <div className='container px-4 mx-auto'>
              <div className='flex items-center'>
                <Link className='inline-block text-lg font-bold' to='/'>
                  <img
                    className='h-10'
                    src={logo}
                    alt=''
                    width='auto'
                  />
                </Link>
                <div className='lg:hidden ml-auto'>
                  <button
                    className='navbar-burger flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200'
                    onClick={() => setMenuOpen(true)}
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M3 12H21'
                        stroke='black'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M3 6H21'
                        stroke='black'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M3 18H21'
                        stroke='black'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </div>
                <ul className='hidden lg:flex ml-14 lg:w-auto lg:space-x-12'>
                  <li className='group relative'>
                    <Link
                      className='inline-block text-green-400 hover:text-orange-900 font-medium'
                      to='#Despre noi'
                    >
                      Despre noi
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='inline-block hover:text-orange-900 font-medium text-green-400'
                      to='#Servicii'
                    >
                      Servicii
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='inline-block hover:text-orange-900 font-medium text-green-400'
                      to='#Contact'
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className='relative'>
            <img
              className='absolute top-0 right-0 mt-32 lg:-mt-10'
              src='images/Notebooks-png-1698850193649.webp'
              alt=''
            />
            <div className='relative container px-4 mx-auto'>
              <div className='max-w-3xl'>
                <div className='pl-8 md:pl-12 lg:pl-24 border-l-2 border-orange-600 mb-16'>
                  <h1 className='font-heading text-4xl xs:text-6xl md:text-8xl xl:text-10xl font-bold text-white mb-8 sm:mb-14'>
                    <span>Descoperiți cu noi</span>
                    <span className='font-serif italic'>&nbsp;succesul</span>
                  </h1>
                </div>
                <div className='lg:flex mb-20 items-center'>
                  <div className='max-w-md mb-12 lg:mb-0 lg:mr-8'>
                    <p
                      className='text-xl font-semibold text-white'
                    >
                      La Arion Management, ne străduim să devenim catalizatorul
                      succesului dumneavoastră. Viziunea noastră este de a
                      inspira și de a transforma afacerile locale, creând impact
                      durabil în comunitatea noastră și dincolo de ea.
                    </p>
                  </div>
                  <div>
                    <div>
                      <Link
                        className='relative group inline-block w-full sm:w-auto py-4 px-6 text-white font-semibold bg-yellow-800 rounded-md overflow-hidden'
                        to='#Contact'
                      >
                        <div className='absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500' />
                        <div className='relative flex items-center justify-center'>
                          <span className='mr-4'>Contact</span>
                          <span>
                            <svg
                              width={8}
                              height={12}
                              viewBox='0 0 8 12'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M6.83 5.29L2.59 1.05C2.49704 0.956274 2.38644 0.881879 2.26458 0.83111C2.14272 0.780342 2.01202 0.754204 1.88 0.754204C1.74799 0.754204 1.61729 0.780342 1.49543 0.83111C1.37357 0.881879 1.26297 0.956274 1.17 1.05C0.983753 1.23736 0.879211 1.49082 0.879211 1.755C0.879211 2.01919 0.983753 2.27264 1.17 2.46L4.71 6L1.17 9.54C0.983753 9.72736 0.879211 9.98082 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.71C6.92373 6.61704 6.99813 6.50644 7.04889 6.38458C7.09966 6.26272 7.1258 6.13201 7.1258 6C7.1258 5.86799 7.09966 5.73728 7.04889 5.61543C6.99813 5.49357 6.92373 5.38297 6.83 5.29Z'
                                fill='#FFF2EE'
                              />
                            </svg>
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${menuOpen ? "" : "hidden"} navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50`}>
            <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-25' />
            <nav className='relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto'>
              <div className='flex items-center mb-16'>
                <Link
                  className='mr-auto text-2xl font-medium leading-none'
                  to='/'
                >
                  <img
                    className='h-10'
                    src={logo}
                    alt=''
                    width='auto'
                  />
                </Link>
                <button className='navbar-close'
                onClick={() => setMenuOpen(false)}
                >
                  <svg
                    className='h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <div>
                <ul className='mb-2'>
                  <li>
                    <Link
                      className='block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg'
                      to='#Despre_noi'
                    >
                      Despre noi
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg'
                      to='#Servicii'
                    >
                      Servicii
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg'
                      to='#Contact'
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='absolute bottom-0'>
                <p className='mt-6 mb-4 text-sm text-center text-gray-500'>
                  <span>© 2023 Arion Managment. Toate drepturile rezervate.</span>
                </p>
              </div>
            </nav>
          </div>
        </section>
        <section id="Despre_noi" className='relative py-20 lg:py-24 bg-gray-800 overflow-hidden'>
          <div className='relative container px-4 mx-auto'>
            <div className='text-center mb-18'>
              <h1 className='font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-white mb-12'>
                <span>Citește acum totul</span>
                <span className='block font-serif italic'>&nbsp;despre noi</span>
              </h1>
            </div>
            <div className='max-w-lg lg:max-w-3xl xl:max-w-5xl mx-auto'>
              <div className='flex flex-wrap -mx-4'>
                <div className='w-full lg:w-1/2 px-4 mb-12 lg:mb-0'>
                  <div className='max-w-lg'>
                    <p className='text-2xl text-gray-50 mb-12'>
                      Arion Management, partenerul dvs. de încredere pentru
                      soluții de consultanță și management în Alba Iulia. Oferim
                      orientare strategică și expertiză pentru afacerea dvs.,
                      transformând visele în rezultate tangibile.
                    </p>
                    <p className='text-lg mb-6 text-gray-300'>
                      Cu o istorie solidă în spate, Arion Management s-a afirmat
                      ca o forță motrice în domeniul consultanței și
                      managementului. Înființată cu pasiune și dedicare în Alba
                      Iulia, suntem mândri să oferim servicii de calitate
                      superioară clienților noștri. Ne ghidăm afacerea după
                      principii fundamentale, inclusiv integritatea,
                      transparența și respectul față de parteneriatele noastre.
                    </p>
                    <p className='text-lg text-gray-300'>
                      Echipa noastră este inima și sufletul Arion Management.
                      Fiecare membru este ales cu grijă, aducând cu sine
                      experiență bogată și cunoștințe adânci în diverse domenii
                      ale afacerilor. Cu o abordare colaborativă și creativă,
                      echipa noastră își dedică timpul și energia pentru a vă
                      oferi soluții inovatoare și orientate spre rezultate.
                    </p>
                  </div>
                </div>
                <div className='w-full lg:w-1/2 px-4'>
                  <div className='max-w-lg'>
                    <p className='text-lg mb-6 text-gray-300'>
                      Fie că sunteți o afacere nouă, o întreprindere în creștere
                      sau o corporație consolidată, suntem aici pentru a vă
                      oferi soluții adaptate și inovatoare care să vă ajute să
                      vă atingeți potențialul maxim. Cu o abordare orientată
                      spre client și angajamentul nostru față de excelență,
                      suntem gata să vă susținem în fiecare etapă a călătoriei
                      dvs. în lumea afacerilor."
                    </p>
                    <p className='text-lg text-gray-300'>
                      Prin aceste detalii, dorim să subliniem nu doar
                      competențele noastre, ci și valorile care ne ghidează în
                      fiecare proiect. Integritatea și angajamentul față de
                      succesul clienților sunt fundamentul pe care se bazează
                      fiecare colaborare cu Arion Management. Nevoile dvs. sunt
                      în centrul atenției noastre, și suntem dedicați să vă
                      ajutăm să atingeți și să depășiți obiectivele afacerii
                      dvs. prin abordări inovatoare și personalizate."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Servicii" className='relative py-20 md:py-32 overflow-hidden bg-gray-50'>
          <div className='relative container px-4 mx-auto'>
            <div className='max-w-7xl mx-auto'>
              <div className='text-center mb-24'>
                <h1 className='font-heading text-5xl xs:text-6xl md:text-7xl font-bold'>
                  <span className='text-orange-700'>Tu întrebi? Noi avem</span>
                  <span className='font-serif italic text-orange-700'>
                  &nbsp;soluția
                  </span>
                </h1>
              </div>
              <div className='flex flex-wrap -mx-4 -mb-8'>
                <div className='w-full md:w-1/2 px-4 mb-8'>
                  <div className='flex flex-col h-full max-w-xs mx-auto md:max-w-none px-6 py-9 md:pl-9 md:pr-12 bg-green-400 rounded-3xl shadow-lg'>
                    <h4 className='text-xl font-semibold text-white mb-4'>
                      Servicii de consultanță conform contract
                    </h4>
                    <p className='text-green-100 mb-4'>
                      Oferim consultanță conform contractelor pentru afacerea
                      dumneavoastră, asigurându-ne că fiecare acord este
                      gestionat eficient și profitabil.{' '}
                    </p>
                  </div>
                </div>
                <div className='w-full md:w-1/2 px-4 mb-8'>
                  <div className='flex flex-col h-full max-w-xs mx-auto md:max-w-none px-6 py-9 md:pl-9 md:pr-12 bg-green-400 rounded-3xl shadow-lg'>
                    <h4 className='text-xl font-semibold text-white mb-4'>
                      Întocmire documentație
                    </h4>
                    <p className='text-green-100 mb-4'>
                      Echipa noastră dedicată și expertiza noastră asigură
                      elaborarea documentelor precise, conforme cu standardele
                      legale și industriale, pentru a vă sprijini în
                      funcționarea eficientă și conformă a afacerii.
                    </p>
                  </div>
                </div>
                <div className='w-full md:w-1/2 px-4 mb-8'>
                  <div className='flex flex-col h-full max-w-xs mx-auto md:max-w-none px-6 py-9 md:pl-9 md:pr-12 bg-green-400 rounded-3xl shadow-lg'>
                    <h4 className='text-xl font-semibold text-white mb-4'>
                      Verificare eligibilitate
                    </h4>
                    <p className='text-green-100 mb-4'>
                      Prin serviciul nostru specializat de verificare a
                      eligibilității, vă asigurăm că afacerea dumneavoastră
                      îndeplinește cu rigurozitate toate cerințele și normele
                      esențiale din domeniul specific al dumneavoastră.{' '}
                    </p>
                  </div>
                </div>
                <div className='w-full md:w-1/2 px-4 mb-8'>
                  <div className='flex flex-col h-full max-w-xs mx-auto md:max-w-none px-6 py-9 md:pl-9 md:pr-12 bg-green-400 rounded-3xl shadow-lg'>
                    <h4 className='text-xl font-semibold text-white mb-4'>
                      Analiză tehnico-financiară
                    </h4>
                    <p className='text-green-100 mb-4'>
                      Analiza noastră tehnico-financiară vă furnizează
                      informații esențiale pentru decizii fundamentate în
                      afacerea dumneavoastră, evidențiind oportunitățile și
                      riscurile potențiale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Contact" className='relative py-20 md:py-32 overflow-hidden bg-orange-700'>
          <img
            className='absolute top-0 left-0 md:mt-24'
            src='saturn-assets/images/contact/dots-side-1.svg'
            alt=''
          />
          <img
            className='absolute bottom-0 right-0 mb-8 lg:mb-24'
            src='saturn-assets/images/contact/dots-side-2.svg'
            alt=''
          />
          <div className='relative container px-4 mx-auto'>
            <div className='max-w-7xl mx-auto'>
              <div className='max-w-2xl text-center mx-auto mb-20'>
                <h1 className='font-heading text-5xl xs:text-6xl font-bold text-gray-900 mb-4'>
                  <span className='text-white'>
                    Sună sau trimite-ne un mesaj
                  </span>
                  <span className='font-serif italic text-white'>&nbsp;ACUM</span>
                </h1>
              </div>
              <div className='max-w-md lg:max-w-5xl mx-auto'>
                <div className='flex flex-wrap -mx-4'>
                  <div className='w-full lg:w-1/2 px-4 order-last lg:order-first'>
                    <img
                      className=''
                      src='images/statistic-icon-transparent.png'
                      alt=''
                    />
                  </div>
                  <div className='w-full lg:w-1/2 px-4 mb-12 lg:mb-0 items-center flex'>
                    <div className='max-w-md py-6 lg:ml-auto'>
                      <div className='flex mb-12 items-center'>
                        <div className='flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-yellow-800'>
                          <img
                            src='saturn-assets/images/contact/icon-phone.svg'
                            alt=''
                          />
                        </div>
                        <div>
                          <span className='text-lg text-orange-200'>
                            Telefon
                          </span>
                          <span className='block text-lg font-semibold text-white'>
                          0745 357 905
                          </span>
                        </div>
                      </div>
                      <div className='flex mb-12 items-center'>
                        <div className='flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-yellow-800'>
                          <img
                            src='saturn-assets/images/contact/icon-email.svg'
                            alt=''
                          />
                        </div>
                        <div>
                          <span className='text-lg text-orange-200'>Email</span>
                          <span className='block text-lg font-semibold text-white'>
                            office.arion.management@gmail.com
                          </span>
                        </div>
                      </div>
                      <div className='flex items-center'>
                        <div className='flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-yellow-800'>
                          <img
                            className='h-8'
                            src='saturn-assets/images/contact/icon-location.svg'
                            alt=''
                          />
                        </div>
                        <div>
                          <span className='text-lg text-orange-200'>
                            Adresă
                          </span>
                          <span className='block text-lg font-semibold text-white'>
                          Alba Iulia, Str. Tudor Vladimirescu, Nr. 22C, județ ALBA
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative py-20 overflow-hidden bg-green-400'>
          <img
            className='absolute bottom-0 left-1/2'
            src='saturn-assets/images/footers/orange-light-bottom.png'
            alt=''
          />
          <div className='relative container px-4 mx-auto'>
            <div className='max-w-7xl mx-auto'>
              <div className='pb-8 mb-15 border-b border-gray-100 text-center'>
                <Link className='inline-block' to='/'>
                  <img
                    className='h-15'
                    src={logo}
                    alt=''
                  />
                </Link>
              </div>
              <div className='flex flex-wrap -mb-5 -mx-6 items-center justify-center'>
                <div className='px-6 mb-5'>
                  <Link
                    className='inline-block text-white font-medium hover:text-orange-900'
                    to='#Despre_noi'
                  >
                    Despre noi
                  </Link>
                </div>
                <div className='px-6 mb-5'>
                  <Link
                    className='inline-block text-white font-medium hover:text-orange-900'
                    to='#Servicii'
                  >
                    Servicii
                  </Link>
                </div>
                <div className='px-6 mb-5'>
                  <Link
                    className='inline-block text-white font-medium hover:text-orange-900'
                    to='#Contact'
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className='mt-15 text-center'>
                <span className='text-white'>
                  © 2023 Arion Management . Toate drepturile rezervate.
                </span>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

