import TeamMember from '../models/team.model.js';

export const createTeamMemberService = async (data) => {
  const newMember = new TeamMember(data);
  return await newMember.save();
};

export const getAllTeamMembersService = async () => {
  return await TeamMember.find();
};

export const getTeamMemberByIdService = async (id) => {
  return await TeamMember.findById(id);
};

export const updateTeamMemberService = async (id, data) => {
  return await TeamMember.findByIdAndUpdate(id, data, { new: true });
};

export const deleteTeamMemberService = async (id) => {
  return await TeamMember.findByIdAndDelete(id);
};
