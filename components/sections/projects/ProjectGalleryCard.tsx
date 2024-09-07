import {
  Box,
  Heading,
  Link,
  List,
  ListItem,
  Text,
  VStack
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Project } from 'utils/types';

const styles: any = {};

export const ProjectGalleryCard = ({ project }: { project: Project }) => {
  return (
    <Box>
      <li>
        <VStack>
          <Text>Featured Project a</Text>
          <Heading>
            <Link href={project.url} rel='noopener noreferrer' target='_blank'>
              {project.name}
            </Link>
          </Heading>
          <div className={styles.description}>
            <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
          </div>
          <List className={styles.projectTechList}>
            {project.technologies.map((tech) => (
              <ListItem key={Math.random()}>{tech}</ListItem>
            ))}
          </List>
          <div>
            {project.github && (
              <a
                href={project.github}
                rel='noopener noreferrer'
                target='_blank'
              >
                <FiGithub />
              </a>
            )}
            <a href={project.url} rel='noopener noreferrer' target='_blank'>
              <FiExternalLink />
            </a>
          </div>
        </VStack>
      </li>
    </Box>
  );
};
