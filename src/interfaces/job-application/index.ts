import { FeedbackInterface } from 'interfaces/feedback';
import { InterviewInterface } from 'interfaces/interview';
import { JobPostingInterface } from 'interfaces/job-posting';
import { UserInterface } from 'interfaces/user';

export interface JobApplicationInterface {
  id?: string;
  job_posting_id: string;
  applicant_id: string;
  status: string;
  feedback?: FeedbackInterface[];
  interview?: InterviewInterface[];
  job_posting?: JobPostingInterface;
  user?: UserInterface;
  _count?: {
    feedback?: number;
    interview?: number;
  };
}
