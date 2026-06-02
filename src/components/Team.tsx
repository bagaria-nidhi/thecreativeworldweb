import { Card, CardContent } from "@/components/ui/card";
import nidhiImage from "@/assets/nidhi-bagaria.jpg";
import purviImage from "@/assets/purvi.jpeg";
import manishaImage from "@/assets/manisha.jpeg";
import XavioImage from "@/assets/swathin-xavio.jpeg"

const teamMembers = [
  {
    name: "Nidhi Bagaria",
    role: "Founder & Lead Facilitator",
    description: "Passionate about nurturing creativity and love for reading in children through storytelling. Nidhi is a creative storyteller, Educator, Mentor, teacher trainer, and founder of The Creative World. She believes stories travel far and wide carrying their wisdom and spreading their magic to whomever the story meets! She has done her Masters and has a degree in Early Childhood Care and Education. She has over 20 years of experience in this field and has been conducting workshops for schools, NGOs, and bookstores as well as holding online workshops.",
    isFounder: true,
    image: nidhiImage,
  },
  {
    name: "Manisha Ashar",
    role: "Facilitator",
    description: "Dedicated to inspiring young minds through the art of storytelling and creative expression.",
    isFounder: false,
    image: manishaImage
  },
  {
    name: "Purvi Shah",
    role: "Facilitator",
    description: "Passionate about nurturing imagination and building confidence in children through stories.",
    isFounder: false,
    image: purviImage
  },
  {
    name:"Swathin Xavio",
    role:"Facilitator",
    isFounder:false,
    description:"Raised in a beautiful coastal town in Kerala, Swathin is  passionate about creating meaningful impact wherever he goes.A social worker, storyteller, and aspiring travel podcaster, he loves connecting people through stories and experiences.",
    image:XavioImage
  }
];

const Team = () => {
  const founders = teamMembers.filter((member) => member.isFounder);
  const facilitators = teamMembers.filter((member) => !member.isFounder);

  return (
    <section className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our <span className="text-kids-yellow">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind The Creative World who inspire and nurture young minds
          </p>
        </div>

        {/* Founders */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-semibold text-center text-foreground mb-8">
            Founders
          </h3>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {founders.map((member, index) => (
              <Card
                key={index}
                className="w-full max-w-xl bg-card border-kids-pink/20 hover:shadow-storytelling transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl font-bold text-white">
                        {member.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="text-kids-pink font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Teachers/Mentors/Facilitators */}
        {facilitators.length > 0 && (
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-center text-foreground mb-8">
              Teachers & Mentors
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {facilitators.map((member, index) => (
                <Card
                  key={index}
                  className="bg-card border-kids-blue/20 hover:shadow-warm transition-all duration-300"
                >
                  <CardContent className="p-5 text-center">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-gradient-blue flex items-center justify-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {member.name}
                    </h4>
                    <p className="text-kids-blue font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
