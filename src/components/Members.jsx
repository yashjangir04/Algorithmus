const thirdYearMembers = [
  {
    name: "Deepak Kumar",
    image: "./deepak.jpg",
    role: "Club Coordinator",
  },
  {
    name: "Parth Sharma",
    image: "/parth.jpg",
  },
  {
    name: "Amandeep Mandal",
    image: "/amandeep.jpg",
  },
  {
    name: "Prakshal Jain",
    image: "/prakshal.jpg",
  },
  {
    name: "Ansh Somani",
    image: "/ansh.jpeg",
  },
];

const secondYearMembers = [
  {
    name: "Yash Jangir",
    image: "/yash.jpeg",
  },
  {
    name: "Saksham Agarwal",
    image: "/saksham.jpeg",
  },
  {
    name: "Lovepreet Singh",
    image: "/lovepreet.jpg",
  },
  {
    name: "Jatin Agarwal",
    image: "/jatin.jpeg",
  },
];

function MemberCard({ name, image, role }) {
  return (
    <div className="group border border-white/10 bg-[#050505] overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03]">
      
      <div className="aspect-square w-full overflow-hidden border-b border-white/10">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover grayscale opacity-85 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03]"
        />
      </div>

      <div className="px-4 py-4 text-center">
        <p className="text-base md:text-lg font-bold uppercase tracking-widest text-white">
          {name}
        </p>

        {role && (
          <p className="mt-1 text-[10px] md:text-xs tracking-[0.25em] uppercase text-neutral-500">
            {role}
          </p>
        )}
      </div>
    </div>
  );
}

function YearBlock({ title, members }) {
  return (
    <div className="border border-white/10 bg-[#050505] p-5 md:p-6">
      <div className="mb-6 flex items-center gap-4 border-b border-white/10 pb-4">
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
          {title}
        </h3>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
        {members.map((member) => (
          <MemberCard key={member.name} name={member.name} image={member.image} role={member.role} />
        ))}
      </div>
    </div>
  );
}

export default function Members() {
  return (
    <section id="members" className="w-full border-t border-white/10 bg-black px-6 py-24 font-space selection:bg-white selection:text-black">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 flex items-end gap-4 border-b border-white/10 pb-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-white">
            Current <span className="text-neutral-500">Members</span>
          </h2>
        </div>

        <div className="space-y-8">
          <YearBlock title="Third Year Members" members={thirdYearMembers} />
          <YearBlock title="Second Year Members" members={secondYearMembers} />
        </div>
      </div>
    </section>
  );
}