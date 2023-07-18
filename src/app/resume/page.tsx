import React from 'react';
import { FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import { TbCertificate } from 'react-icons/tb';

import ArrowRightIcon from '../../components/icons/ArrowRightIcon';
import Header from '@/components/pages/resume/Header';
import Heading from '@/components/headings/Heading';
import ResumeCard from '@/components/pages/resume/ResumeCard';
import {
  contactDetails,
  skills,
  experiences,
  internships,
  certifications,
  educations,
} from '@/utils/data';
import IsNullOrWhiteSpace from '@/utils/helpers';
import { VisitButton } from '@/components/common/Button';

const Resume = () => {
  return (
    <main className="flex text-colorBodyWhite dark:text-colorGray min-h-screen flex-col items-center justify-between mt-6 md:mt-10 lg:w-[90%] xl:w-[93%] 2xl:w-[90%] lg:mx-auto lg:mt-4">
      <div className="px-6 sm:px-10 w-full">
        <div className="my-8 flex justify-center">
          <Heading
            title="Resume"
            className="items-center"
            subTitle="Professional Profile"
          />
        </div>
        <div className="flex">
          <VisitButton
            text="Download PDF"
            to="/documents/Sajad-Shafi_Resume.pdf"
          />
        </div>
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:mr-8">
            <ResumeCard heading="About">
              <blockquote>
                A highly motivated and detail-oriented software engineer with a
                strong desire to create innovative solutions. I have a solid
                foundation in computer science principles and a track record of
                producing high-quality software. In my current position, I have
                designed and maintained software applications in C# and .Net
                Core, as well as collaborated with cross-functional teams to
                design and implement software solutions.
              </blockquote>
            </ResumeCard>
            <ResumeCard heading="Contact">{contactDetails.content}</ResumeCard>
            {skills.map(skillsec => (
              <ResumeCard
                key={skillsec.heading}
                heading={skillsec.heading}>
                {skillsec.skills?.map(skill => (
                  <ul key={skill}>
                    <li className="flex mb-2 items-center">
                      <span className="mr-2">
                        <ArrowRightIcon />
                      </span>
                      {skill}
                    </li>
                  </ul>
                ))}
              </ResumeCard>
            ))}
          </div>
          <div>
            <ResumeCard heading={experiences.heading}>
              <div className="font-Secondary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 leading-relaxed indent-5 tracking-wider">
                {experiences.list.map((exp, index) => (
                  <div
                    key={exp.companyName}
                    className={`flex items-start ${
                      index > 0 ? 'mt-5' : 'mt-1'
                    }`}>
                    <span className="text-2xl text-colorPrimary mr-2">
                      <FaLaptopCode />
                    </span>
                    <div className="flex-1">
                      <h2>
                        Company:{' '}
                        <span className="italic font-semibold text-colorPrimary">
                          {exp.companyName}
                        </span>
                      </h2>
                      <p className="mt-1">Role: {exp.role}</p>
                      <p className="mt-1">
                        From: {exp.dateFrom} to {exp.dateTo}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ResumeCard>
            <ResumeCard heading={internships.heading}>
              <div className="font-Secondary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 leading-relaxed indent-5 tracking-wider">
                {internships.list.map((exp, index) => (
                  <div
                    key={exp.companyName}
                    className={`flex items-start ${
                      index > 0 ? 'mt-5' : 'mt-1'
                    }`}>
                    <span className="text-2xl text-colorPrimary mr-2">
                      <TbCertificate />
                    </span>
                    <div className="flex-1">
                      <h2>
                        Company:{' '}
                        <span className="italic font-semibold text-colorPrimary">
                          {exp.companyName}
                        </span>
                      </h2>
                      <p className="mt-1">Role: {exp.role}</p>
                      <p className="mt-1">
                        From: {exp.dateFrom} to {exp.dateTo}
                      </p>
                      {!IsNullOrWhiteSpace(exp.certificateLink) && (
                        <div className="flex">
                          <VisitButton
                            text="View Certificate"
                            to={exp.certificateLink}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ResumeCard>
            <ResumeCard heading={certifications.heading}>
              <div className="font-Secondary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 leading-relaxed indent-5 tracking-wider">
                {certifications.list.map((cert, index) => (
                  <div
                    key={cert.institute}
                    className={`flex items-start ${
                      index > 0 ? 'mt-5' : 'mt-1'
                    }`}>
                    <span className="text-2xl text-colorPrimary mr-2">
                      <TbCertificate />
                    </span>
                    <div className="flex-1">
                      <h2>
                        Institute:{' '}
                        <span className="italic font-semibold text-colorPrimary">
                          {cert.institute}
                        </span>
                      </h2>
                      <p className="mt-1">
                        Certification Name: {cert.certificationName}
                      </p>
                      <p className="mt-1">
                        From: {cert.dateFrom} to {cert.dateTo}
                      </p>
                      {!IsNullOrWhiteSpace(cert.certificateLink) && (
                        <div className="flex">
                          <VisitButton
                            text="View Certificate"
                            to={cert.certificateLink}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ResumeCard>
            <ResumeCard heading={certifications.heading}>
              <div className="font-Secondary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 leading-relaxed indent-5 tracking-wider">
                {educations.list.map((edu, index) => (
                  <div
                    key={edu.degreeName}
                    className={`flex items-start ${
                      index > 0 ? 'mt-5' : 'mt-1'
                    }`}>
                    <span className="text-2xl text-colorPrimary mr-2">
                      <FaGraduationCap />
                    </span>
                    <div className="flex-1">
                      <h2>
                        College / University:{' '}
                        <span className="italic font-semibold text-colorPrimary">
                          {edu.collegeName}
                        </span>
                      </h2>
                      <p className="mt-1">Degree: {edu.degreeName}</p>
                      <p className="mt-1">CGPA: {edu.cgpa}</p>
                      <p className="mt-1">Completed In: {edu.passedOut}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ResumeCard>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
