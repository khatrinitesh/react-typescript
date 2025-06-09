import React from "react";
import type { TeamMember } from "../interface";
import { AnimatePresence, motion } from "framer-motion";
import { useTeamStore } from "./../store/useTeamStore";

const MeetTheTeam: React.FC = () => {
  const { selectedMember, clearSelection } = useTeamStore();
  return (
    <AnimatePresence>
      {selectedMember && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={clearSelection}
        >
          <motion.div
            className="bg-white p-6 rounded-lg max-w-md w-full text-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-28 h-28 mx-auto rounded-full object-cover"
            />
            <h2 className="text-xl font-bold mt-4">{selectedMember.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{selectedMember.role}</p>
            <p className="text-gray-700">{selectedMember.bio}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MeetTheTeam;

interface Props {
  member: TeamMember;
}

const TeamCard: React.FC<Props> = ({ member }) => {
  const selectMember = useTeamStore((state) => state.selectMember);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white shadow-md p-4 rounded-lg cursor-pointer text-center"
      onClick={() => selectMember(member)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-24 h-24 mx-auto rounded-full object-cover"
      />
      <h3 className="text-lg font-semibold mt-2">{member.name}</h3>
      <p className="text-gray-500">{member.role}</p>
    </motion.div>
  );
};
