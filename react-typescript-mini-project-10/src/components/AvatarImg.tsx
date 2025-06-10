import React from "react";
import { motion } from "framer-motion";
import type { AvatarItem } from "../interface";
import { AVATAR_LIST } from "../constants/constants";

interface Props {
  avatar: AvatarItem;
}

const AvatarImgComp: React.FC = () => {
  return (
    <>
      {AVATAR_LIST.map((avatar) => (
        <AvatarImg key={avatar.id} avatar={avatar} />
      ))}
    </>
  );
};

export default AvatarImgComp;

const AvatarImg: React.FC<Props> = ({ avatar }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 2 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex flex-col items-center space-y-2 p-4"
    >
      <img
        src={avatar.imageUrl}
        alt={avatar.name}
        className="w-24 h-24 rounded-full shadow-lg"
      />
      <p className="text-center text-sm font-medium">{avatar.name}</p>
    </motion.div>
  );
};
