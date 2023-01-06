fetch('https://teamd.onrender.com/admissions/updates/BTECH/visible')
.then((response) => response.json())
  .then((data) => {
    
    const ugupdates = document.getElementById('ug-updates')
    data.forEach((update) => {
      const ugupdate = document.createElement('li')
    ugupdate.innerHTML = `
    <div class="flex">
      <a
       href='${update.link}'
        class="hover:text-orange-600 inline"
      >
        <span class="bg-[#0369A1] mr-1">|</span>
      ${update.title}
      </a>
      <img
        class="h-[14px] mt-2 pr-2"
        src="./img/New.gif"
      />
    </div>
  
      `
      ugupdates.appendChild(ugupdate)
    })
  })

  fetch('https://teamd.onrender.com/admissions/updates/MTECH-CCMT/visible')
  .then((response) => response.json())
    .then((data) => {
      
      const mtech_ccmt_updates = document.getElementById('mtech-ccmt-updates')
      data.forEach((update) => {
        const mtech_ccmt_update = document.createElement('li')
      mtech_ccmt_update.innerHTML = `
      <li>
        <div class="flex">
          <a
            href="https://www.nitj.ac.in/admission_mtech_ccmt/login"
            class="hover:text-orange-600 inline"
          >
            <span class="bg-[#0369A1] mr-1">|</span>
            <strong
              >Online Registration Form (M.Tech Admissions -
              2022)</strong
            >
          </a>
          <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
        </div>
        <div class="pl-4">
          <strong>Username:</strong> GATE Registration ID of the
          Candidate
        </div>
        <div class="pl-4">
          <strong>Password:</strong> Name of the Candidate
          (Include spaces, If any)
        </div>
      
      <li>
        <div class="flex">
          <a
            href="https://www.nitj.ac.in//nitj_files/Admissions/MTech/Revised_Modalities_for_the_physical_reporting_of_PG_students_22080577544.pdf"
            class="hover:text-orange-600 inline"
          >
            <span class="bg-[#0369A1] mr-1">|</span>
            <strong>REVISED</strong> Notice regarding
            <strong>Physical Reporting</strong> of
            M.Tech./M.Sc./ MBA-2022
          </a>
          <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
        </div>
      
      <li>
        <div class="flex">
          <a
            href="https://www.nitj.ac.in/nitj_files/links/Notice_regarding_Start_of_Classes_for_MTech_MBA_MSc_28037.pdf"
            class="hover:text-orange-600 inline"
          >
            <span class="bg-[#0369A1] mr-1">|</span>
            Notice regarding Start of Classes for the
            M.Tech/M.Sc/MBA (Batch-2022)
          </a>
          <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
        </div>
      
      <li>
        <div class="flex">
          <a
            href="https://www.nitj.ac.in/nitj_files/links/NOTICE_for_National_Spot_Round_Phase_-III_70807.pdf"
            class="hover:text-orange-600 inline"
          >
            <span class="bg-[#0369A1] mr-1">|</span>
            Notice regarding
            <strong>National Spot Round (Phase-III)</strong>
            CCMT & CCMN-2022
          </a>
          <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
        </div>
      </li>
      <li>
        <div class="flex">
          <a
            href="https://www.nitj.ac.in/nitj_files/links/Performa_Seat_Surrendered_08072022_24229.docx"
            class="hover:text-orange-600 inline"
          >
            <span class="bg-[#0369A1] mr-1">|</span>
            Application Form for Surrender of Seat
            (M.Tech/M.Sc./MBA)
          </a>
          <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
        </div>
      </li>
      <li>
        <div class="flex">
          <a
            href="https://www.nitj.ac.in/nitj_files/links/Fee_Structure_CCMT_080822_82467.pdf"
            class="hover:text-orange-600 inline"
          >
            <span class="bg-[#0369A1] mr-1">|</span>
            <strong>Fee Structure</strong> of M.Tech Programme
            for newly admitted students under CCMT
          </a>
          <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
        </div>
      </li>
      <li>
        <div class="flex">
          <a
            href="https://www.nitj.ac.in/index.php/nitj_cinfo/admissions#"
            class="hover:text-orange-600 inline"
          >
            <span class="bg-[#0369A1] mr-1">|</span>
            M.Tech / M.Sc.
            <strong>Admission Helplines:</strong>
            +91-8968140769, 0181-5037777
          </a>
          <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
        </div>
      </li>
      <li>
        <div class="flex">
          <a
            href="https://ccmt.nic.in/"
            class="hover:text-orange-600 inline"
          >
            <span class="bg-[#0369A1] mr-1">|</span>
            <strong>CCMT-2022</strong>
          </a>
          <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
        </div>
      </li>
      <li>
        <div class="flex">
          <a
            href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/213"
            class="hover:text-orange-600 inline"
          >
            <span class="bg-[#0369A1] mr-1">|</span>
            Fee Refund Rules of the Institute
          </a>
          <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
        </div>
      </li>
      <li>
        <div class="flex">
          <span class="text-red-600"
            ><strong>NOTE:</strong> Hostel facility is not
            available for Ph.D., PG Students (M.Tech/M.Sc./MBA)
            taking admission during AY 2022-23.
          </span>
        </div>
      </li>
    
        `
        mtech_ccmt_updates.appendChild(mtech_ccmt_update)
      })
    })

    
fetch('https://teamd.onrender.com/admissions/updates/MTECH-SELF/visible')
.then((response) => response.json())
  .then((data) => {
    
    const mtech_self_updates = document.getElementById('mtech-self-updates')
    data.forEach((update) => {
      const mtech_self_update = document.createElement('li')
    mtech_self_update.innerHTML = `
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/761"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          Link for <strong>Online Fee Payment</strong> for
          M.Tech (Self-Sponsored) Admissions-2022
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/nitj_files/links/List_of_Candidates_provisionally_admitted_for_M_92439.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong> FINAL List of Candidates</strong>
          provisionally admitted for M.Tech (Self sponsored)
          through Spot Round
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/admission_mtech_ss/login"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong
            >Online Registration Form (M.Tech (SS) Admissions
            - 2022)</strong
          >
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
      <div class="pl-4">
        <strong>Username:</strong> Application ID (sent during
        Online Registration for Application Form)
      </div>
      <div class="pl-4">
        <strong>Password:</strong> Date of Birth of the
        Applicant (YYYYMMDD format)
      </div>
    
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in//nitj_files/Admissions/MTech/MTECH_SELF-SPONSORED_SPOT_ROUND_ADMISSION_2022_FORM_22082440689.docx"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong>Application Form</strong> for M.Tech
          (Self-Sponsored) Spot Round Admission
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in//nitj_files/Admissions/MTech/MTECH_SELF-SPONSORED_SPOT_ROUND_ADMISSION_2022_FORM_22082440689.docx"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong>Note:</strong> The candidates must bring the
          filled application form along with the listed
          documents at the time of reporting in the respective
          departments for the spot round on 25th August 2022
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/index.php/nitj_cinfo/admissions#"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong>Note:</strong> The Timing of the Written
          Test for M.Tech (Self-Sponsored) Spot Round
          Admission in
          <strong>Artificial Intelligence</strong> is
          rescheduled at 12.30pm on 25th August, 2022
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/nitj_files/links/Vacant_Seats_M_Tech_-_Spot_Admission_38215_38462_14609_44753.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong
            >UPDATED: Spot Round of Admission to Vacant
            Seats</strong
          >
          in M.Tech (Self-Sponsored) programme-2022
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/nitj_files/links/provisionally_admitted_candidates_in_MTech_Self_Sponsored_2022_13139_24491.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong
            >List of Candidates provisionally admitted</strong
          >
          for M.Tech (Self sponsored) programmes-2022
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in//nitj_files/Admissions/MTech/M_22081813315.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong>Fee Structure</strong> for M.Tech
          (Self-Sponsored) Session July-December 2022
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/nitj_files/links/Notice_regarding_Start_of_Classes_for_MTech_MBA_MSc_28037.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          Notice regarding Start of Classes for the
          M.Tech/M.Sc/MBA (Batch-2022)
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/755"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong
            >List of Eligible / Not Eligible
            Candidates</strong
          >
          for Admission to M.Tech (Self-Sponsored)
          Admissions-2022
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in//nitj_files/Admissions/MTech/Syllabus_for_M_22080650598.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          Syllabus for M.Tech (Self-Sponsored) Entrance Test
          under Centre for Energy and Environment
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/mtech_ss/Login"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          Click here for
          <strong>Online Application Form</strong> for M.Tech
          (Self-Sponsored)
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/nitj_files/links/M_73941.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong>REVISED: Advertisement</strong> for
          Admission to
          <strong>M.Tech (Self-Sponsored)</strong> for
          Academic Year 2022-23
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/213"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          Fee Refund Rules of the Institute
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <span class="text-red-600"
          ><strong>NOTE:</strong> Hostel facility is not
          available for Ph.D., PG Students (M.Tech/M.Sc./MBA)
          taking admission during AY 2022-23.
        </span>
      </div>
    </li>
  
      `
      mtech_self_updates.appendChild(mtech_self_update)
    })
  })


fetch('https://teamd.onrender.com/admissions/updates/MSC/visible')
.then((response) => response.json())
  .then((data) => {
    
    const msc_updates = document.getElementById('msc-updates')
    data.forEach((update) => {
      const msc_update = document.createElement('li')
    msc_update.innerHTML = `
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/admission_msc/login"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong
            >Online Registration Form (M.Sc. Admissions -
            2022)</strong
          >
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
      <div class="pl-4">
        <strong>Username:</strong> JAM Registration ID of the
        Candidate
      </div>
      <div class="pl-4">
        <strong>Password:</strong> Name of the Candidate
        (Include spaces, If any)
      </div>
    
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in//nitj_files/Admissions/MTech/Revised_Modalities_for_the_physical_reporting_of_PG_students_22080577544.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong>REVISED</strong> Notice regarding
          <strong>Physical Reporting</strong> of
          M.Tech./M.Sc./ MBA-2022
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/nitj_files/links/Notice_regarding_Start_of_Classes_for_MTech_MBA_MSc_28037.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          Notice regarding Start of Classes for the
          M.Tech/M.Sc/MBA (Batch-2022)
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/nitj_files/links/NOTICE_for_National_Spot_Round_Phase_-III_70807.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          Notice regarding
          <strong>National Spot Round (Phase-III)</strong>
          CCMT & CCMN-2022
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/nitj_files/links/Performa_Seat_Surrendered_08072022_24229.docx"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          Application Form for Surrender of Seat
          (M.Tech/M.Sc./MBA)
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/nitj_files/links/Fee_Structure_CCMN_080822_10815.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          Fee Structure of M.Sc. Programme for newly admitted
          students under CCMN
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://ccmn.admissions.nic.in/"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong>CCMN-2022</strong>
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/213"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          Fee Refund Rules of the Institute
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <span class="text-red-600"
          ><strong>Note:</strong> Hostel facility is not
          available for Ph.D., PG Students (M.Tech/M.Sc./MBA)
          taking admission during AY 2022-23.
        </span>
      </div>
    </li>
  
      `
      msc_updates.appendChild(msc_update)
    })
  })

fetch('https://teamd.onrender.com/admissions/updates/MBA/visible')
.then((response) => response.json())
  .then((data) => {
    
    const mba_updates = document.getElementById('mba-updates')
    data.forEach((update) => {
      const mba_update = document.createElement('li')
    mba_update.innerHTML = `
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/730"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          Link for <strong>Online Fee Payment</strong> for MBA
          (Self-Sponsored) Admissions-2022
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/nitj_files/links/Notice_MBA(SS)_130822_55538.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          List of
          <strong
            >Provisionally Recommended Candidates</strong
          >
          for MBA (Self Sponsored) Admissions 2022-2024
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in//nitj_files/Admissions/MTech/Revised_Modalities_for_the_physical_reporting_of_PG_students_22080577544.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong>REVISED</strong> Notice regarding
          <strong>Physical Reporting</strong> of
          M.Tech./M.Sc./ MBA-2022
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/admission_mba/login"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong
            >Online Registration Form (MBA Admissions - 2022)
          </strong>
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
      <div class="pl-4">
        <strong>Username:</strong> Application ID (sent during
        Online Registration for Application Form)
      </div>
      <div class="pl-4">
        <strong>Password:</strong> Date of Birth of the
        Applicant (<strong>YYYYMMDD</strong> format)
      </div>
    
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/nitj_files/links/Notice_regarding_Start_of_Classes_for_MTech_MBA_MSc_28037.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          Notice regarding Start of Classes for the
          M.Tech/M.Sc/MBA (Batch-2022)
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in//nitj_files/Admissions/MBA/Regarding_the_MBA_Entrance_test_and_GD__PI_22080520063.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          Schedule of MBA Entrance Test, GD & PI for for MBA
          (Self-Sponsored) Admissions-2022
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in//nitj_files/Admissions/MBA/list_of_candidates_mba_2022_22080576796.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong>List of Candidates Shortlisted</strong> for
          MBA (Self-Sponsored) Entrance Test
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/753"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong>IMPORTANT:</strong> Notice Regarding
          Submission of Supporting Documents Note: Last Date
          for Documents Submission is:
          <strong>2nd August, 2022</strong>
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in//nitj_files/Admissions/MBA/MBA_Notice_22072871713.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong>Schedule and Waitlisted Candidates</strong>
          for Spot Round Admission to MBA Programme
          (2022-2024)
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/index.php/nitj_cinfo/admissions#"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong>Note:</strong> Candidates have to pay their
          semester fee through online mode using Debit/Credit
          Card/Netbanking/UPI
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in//nitj_files/Admissions/MBA/Spot_round_of_MBA_admission_2022_22072693659.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong>Spot Round</strong> Admission to MBA
          Programme (2022-2024)
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/mba_ss/Login"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          Click here for
          <strong>Online Application Form</strong> for MBA
          (Self-Sponsored)
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/nitj_files/links/MBA_(Self-Sponsored)_2022_(July_2022_Session)_85874.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong>REVISED:</strong> Advertisement for
          Admission to
          <strong>MBA (Self-Sponsored)</strong> for Academic
          Year 2022-23
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/nitj_files/links/Performa_Seat_Surrendered_08072022_24229.docx"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          Application Form for Surrender of Seat
          (M.Tech/M.Sc./MBA)
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/213"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong>Fee Refund Rules</strong> of the Institute
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <span class="text-red-600"
          ><strong>Note:</strong> Hostel facility is not
          available for Ph.D., PG Students (M.Tech/M.Sc./MBA)
          taking admission during AY 2022-23.
        </span>
      </div>
    </li>
  
      `
      mba_updates.appendChild(mba_update)
    })
  })

fetch('https://teamd.onrender.com/admissions/updates/PHD/visible')
.then((response) => response.json())
  .then((data) => {
    
    const phd_updates = document.getElementById('phd-updates')
    data.forEach((update) => {
      const phd_update = document.createElement('li')
    phd_update.innerHTML = `
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in//nitj_files/Admissions/PhD/Notice_PhD_Registration16_Jun_2022_14-58_22061651052.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          Notice regarding
          <strong>Semester Registration</strong> for PhD
          Programme (Session July-2022)
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/213"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong>Fee Refund Rules</strong> of the Institute
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <span class="text-red-600"
          ><strong>Note:</strong> Hostel facility is not
          available for Ph.D., PG Students (M.Tech/M.Sc./MBA)
          taking admission during AY 2022-23.
        </span>
      </div>
    
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/727"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong>Important Instructions</strong> for Research
          Scholars selected for Admission to PhD programmes
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/680"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          Link for <strong>Online Fee Payment</strong> for PhD
          Admissions (Session July-2022)
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in//nitj_files/Admissions/PhD/Fee_structure_of_Ph_22060157335.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong>Fee Structure</strong> for PhD (Full
          Time/Part Time) for Odd Semester (July-2022)
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/725"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          List of Provisionally
          <strong>Selected Candidates for PhD</strong>
          Admissions (Session July-2022)
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/nitj_files/links/Schedule_of_PhD_Interaction_and_Presentation_(Session_July-2022)_260522_2_90360.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          REVISED Schedule of PhD Interaction and Presentation
          (Session July-2022)
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/nitj_files/links/Schedule_and_Instructions_for_Candidates_appearing_PhD_written_Test_July_-2022_28546.pdf"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong>Schedule of Written Test</strong> for
          Admission to PhD Programme for the Academic Year
          2022-2023
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
    <li>
      <div class="flex">
        <a
          href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/721"
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
          <strong
            >List of Eligible / Not Eligible
            Candidates</strong
          >
          for PhD Admissions (Session July - 2022)
        </a>
        <img class="h-[14px] mt-2 pr-2" src="./img/New.gif" />
      </div>
    </li>
  
      `
      phd_updates.appendChild(phd_update)
    })
  })