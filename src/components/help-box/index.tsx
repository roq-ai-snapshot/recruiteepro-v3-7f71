import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['Business Owner'];
  const roles = ['Business Owner', 'Recruiter', 'Hiring Manager', 'Admin', 'JobApplicant'];
  const applicationName = 'RecruiteePro v3';
  const tenantName = 'Business Organization';
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `Business Owner:
1. As a business owner, I want to be able to create an account for my organization on the talent acquisition platform so that I can manage my company's hiring process.
2. As a business owner, I want to be able to invite and manage recruiters, hiring managers, and admins within my organization so that they can access the platform and perform their respective tasks.
3. As a business owner, I want to have an overview of the hiring process, including the number of open positions, applicants, and hires, so that I can make informed decisions about my organization's talent acquisition strategy.
4. As a business owner, I want to be able to customize the platform to match my organization's branding and messaging so that it provides a consistent experience for job applicants.
5. As a business owner, I want to be able to integrate the platform with other HR tools and systems that my organization uses so that we can streamline our processes and reduce manual work.

Recruiter:
1. As a recruiter, I want to be able to create and manage job postings on the platform so that I can attract qualified candidates for open positions.
2. As a recruiter, I want to be able to review and filter incoming resumes and applications so that I can identify the most suitable candidates for each position.
3. As a recruiter, I want to be able to schedule interviews and communicate with candidates through the platform so that I can efficiently manage the interview process.
4. As a recruiter, I want to be able to collaborate with hiring managers and share candidate information so that we can make informed hiring decisions together.
5. As a recruiter, I want to be able to track the progress of each candidate through the hiring process so that I can ensure a smooth and efficient experience for both the candidate and my organization.

Hiring Manager:
1. As a hiring manager, I want to be able to review candidate profiles and provide feedback to recruiters so that we can make informed hiring decisions together.
2. As a hiring manager, I want to be able to participate in interviews and evaluate candidates based on their skills, experience, and fit for the role.
3. As a hiring manager, I want to be able to collaborate with recruiters and other team members on the platform so that we can streamline the hiring process and make better decisions.
4. As a hiring manager, I want to be able to track the progress of candidates through the hiring process so that I can ensure a smooth and efficient experience for both the candidate and my organization.

Admin:
1. As an admin, I want to be able to manage user accounts and permissions within my organization so that I can ensure the right people have access to the platform.
2. As an admin, I want to be able to configure the platform's settings and integrations so that it meets my organization's needs and preferences.
3. As an admin, I want to be able to monitor the platform's usage and performance so that I can identify any issues and ensure a smooth experience for all users.

Job Applicant:
1. As a job applicant, I want to be able to search and apply for open positions on the platform so that I can find the right job opportunity for me.
2. As a job applicant, I want to be able to create a profile and upload my resume so that I can showcase my skills and experience to potential employers.
3. As a job applicant, I want to be able to track the status of my applications and receive updates on the hiring process so that I can stay informed and engaged.
4. As a job applicant, I want to be able to communicate with recruiters and hiring managers through the platform so that I can ask questions and receive feedback on my application.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="20px" bottom="20px" zIndex={3}>
      <Popover placement="top">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody maxH="400px" overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application. Feel free to remove this tutorial with the{' '}
              <Box as="span" bg="yellow.300" p={1}>
                NEXT_PUBLIC_SHOW_BRIEFING
              </Box>{' '}
              environment variable.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
