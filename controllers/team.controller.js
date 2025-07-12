import {
  createTeamMemberService,
  getAllTeamMembersService,
  getTeamMemberByIdService,
  updateTeamMemberService,
  deleteTeamMemberService
} from '../services/team.service.js';

export const createTeamMember = async (req, res) => {
  try {
    const newMember = await createTeamMemberService(req.body);
    res.status(201).json(newMember);
  } catch (err) {
    res.status(500).json({ error: 'Error creating team member', details: err.message });
  }
};

export const getAllTeamMembers = async (req, res) => {
  try {
    const members = await getAllTeamMembersService();
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching team members' });
  }
};

export const getTeamMember = async (req, res) => {
  try {
    const member = await getTeamMemberByIdService(req.params.id);
    if (!member) return res.status(404).json({ message: 'Team member not found' });
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching team member' });
  }
};

export const updateTeamMember = async (req, res) => {
  try {
    const updated = await updateTeamMemberService(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Team member not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Error updating team member' });
  }
};

export const deleteTeamMember = async (req, res) => {
  try {
    const deleted = await deleteTeamMemberService(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Team member not found' });
    res.json({ message: 'Team member deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting team member' });
  }
};
