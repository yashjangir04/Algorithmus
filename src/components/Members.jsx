import React from 'react';
import { FiLinkedin } from 'react-icons/fi';

const thirdYearMembers = [
  {
    name: "Deepak Kumar",
    image: "./deepak.jpg",
    role: "Club Coordinator",
    linkedin: "https://www.linkedin.com/in/deepakdev2/"
  },
  {
    name: "Parth Sharma",
    image: "/parth.jpg",
    linkedin: "https://www.linkedin.com/in/parth-sharma-7845942a2/"
  },
  {
    name: "Amandeep Mandal",
    image: "/amandeep.jpg",
    linkedin: "https://www.linkedin.com/in/amandeep-mandal-66aab3289/"
  },
  {
    name: "Prakshal Jain",
    image: "/prakshal.jpg",
    linkedin: "https://www.linkedin.com/in/prakshal-jain-aa336128a/"
  },
  {
    name: "Ansh Somani",
    image: "/ansh.jpeg",
    linkedin: "https://www.linkedin.com/in/ansh-somani-98527428a/"
  },
];

const secondYearMembers = [
  {
    name: "Yash Jangir",
    image: "/yash.jpeg",
    linkedin: "https://www.linkedin.com/in/yashjangir04"
  },
  {
    name: "Saksham Agarwal",
    image: "/saksham.jpeg",
    linkedin: "https://www.linkedin.com/in/saksham-agarwal-4b95a1317/"
  },
  {
    name: "Lovepreet Singh",
    image: "/lovepreet.jpg",
    linkedin: "https://www.linkedin.com/in/lovepreetibis/"
  },
  {
    name: "Jatin Agarwal",
    image: "/jatin.jpeg",
    linkedin: "https://www.linkedin.com/in/jatin-agarwal-188321322/"
  },
];

function MemberCard({ name, image, role, linkedin }) {
  return (
    <div className="cursor-pointer group border border-white/10 bg-[#050505] overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03] flex flex-col">
      
      <div className="cursor-pointer aspect-square w-full overflow-hidden border-b border-white/10 pointer-events-none">
        <img
          src={image}
          alt={name}
          className="cursor-pointer h-full w-full object-cover transition-all duration-500 grayscale-0 opacity-100 lg:grayscale lg:opacity-85 lg:group-hover:grayscale-0 lg:group-hover:opacity-100 lg:group-hover:scale-[1.03]"
        />
      </div>

      <div className="cursor-pointer px-4 py-5 text-center flex flex-col items-center justify-center flex-grow pointer-events-none">
        <p className="cursor-pointer text-base md:text-lg font-bold uppercase tracking-widest text-white">
          {name}
        </p>

        {role && (
          <p className="cursor-pointer mt-1 text-[10px] md:text-xs tracking-[0.25em] uppercase text-neutral-500">
            {role}
          </p>
        )}

        {linkedin && (
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cursor-pointer pointer-events-auto mt-4 text-neutral-500 hover:text-white transition-colors duration-300"
          >
            <FiLinkedin className="cursor-pointer w-4 h-4 md:w-5 md:h-5" />
          </a>
        )}
      </div>
    </div>
  );
}

function YearBlock({ title, members }) {
  return (
    <div className="cursor-pointer border border-white/10 bg-[#050505] p-5 md:p-6">
      <div className="cursor-pointer mb-6 flex items-center gap-4 border-b border-white/10 pb-4">
        <h3 className="cursor-pointer text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
          {title}
        </h3>
        <div className="cursor-pointer h-px flex-1 bg-white/10" />
      </div>

      <div className="cursor-pointer grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
        {members.map((member) => (
          <MemberCard 
            key={member.name} 
            name={member.name} 
            image={member.image} 
            role={member.role} 
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
}

export default function Members() {
  return (
    <section id="members" className="cursor-pointer w-full border-t border-white/10 bg-black px-6 py-24 font-space selection:bg-white selection:text-black">
      <div className="cursor-pointer mx-auto w-full max-w-7xl">
        <div className="cursor-pointer mb-10 flex items-end gap-4 border-b border-white/10 pb-6">
          <h2 className="cursor-pointer text-4xl md:text-5xl font-black uppercase tracking-widest text-white">
            Current <span className="cursor-pointer text-neutral-500">Members</span>
          </h2>
        </div>

        <div className="cursor-pointer space-y-8">
          <YearBlock title="Third Year Members" members={thirdYearMembers} />
          <YearBlock title="Second Year Members" members={secondYearMembers} />
        </div>
      </div>
    </section>
  );
}