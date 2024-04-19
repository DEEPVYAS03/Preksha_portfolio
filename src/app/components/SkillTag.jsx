// SkillTag.jsx
import React from 'react';

const SkillTag = ({ name }) => {
  return (
    <div className="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">
      {name}
    </div>
  );
};

export default SkillTag;