"use client";
import FamilyDetails from "@/components/FamilyDetails";
import PersonalInformation from "@/components/PersonalInformation";
import PerosnalInformation from "@/components/PersonalInformation";
import CStepper from "@/components/Stepper";
import { useState } from "react";

/**
 * SVG icons can be placed differently also 
 */
const PersonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-user"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);
const FamilyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-users"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

/**
 * * steps array neeeds to sent as a prop
 * * icons object contains numeric key- value as number icon to render icons in stepper 
 */
const steps = ["Personal Information", "Family Members"];
const icons = {
  1: <PersonIcon />,
  2: <FamilyIcon />,
};

export default function Home() {
  //step counter to manipulate form steps
  const [step, setStep] = useState(1);
  //main state to hold entire form data
  const [savedData, setSavedData] = useState(null);
  return (
    <>
      <div>
        <div>
          <div>
            <CStepper
              step={step}
              setStep={setStep}
              steps={steps}
              icons={icons}
              switching={true}
            />
            <div>
              <div>
                {step === 1 && (
                  <PersonalInformation
                    savedData={savedData}
                    setSavedData={setSavedData}
                    setStep={setStep}
                  />
                )}
                {step === 2 && <FamilyDetails  savedData={savedData}
                    setSavedData={setSavedData}
                    setStep={setStep}/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
