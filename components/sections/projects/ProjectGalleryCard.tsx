import {
  Box,
  Center,
  Flex,
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
import styles from 'styles/sections/projects/projectgallerycard.module.scss';

export const ProjectGalleryCard = ({
  project,
  index
}: {
  project: Project;
  index: number;
}) => {
  const project_media_length = project?.media?.length || 1;
  const project_media = [...(project?.media || [])]?.reverse();
  return (
    <Flex
      className={styles.projectGalleryCard}
      minH={`38.2rem`}
      position={`relative`}
      mb={`10rem`}
      gap={`30px`}
      direction={{ base: `column`, lg: `row` }}
    >
      <Box
        className={styles.projectMedia}
        flex={`1`}
        position={`relative`}
        maxW={{ base: `100%`, lg: `70%` }}
        ml={{ base: `auto`, lg: index % 2 == 1 ? 'auto' : '0px' }}
        mr={{ base: `auto`, lg: index % 2 == 1 ? '0px' : 'auto' }}
        w={{ base: `100%`, lg: `70%` }}
        aspectRatio={{ base: `16 / 9` }}
        height={{ base: `300px`, lg: `auto` }}
      >
        {/* <Image
              src={`/project-media/${project.image}.png`}
              alt={project.name}
              fill
              style={{ objectFit: 'contain' }}
              className={styles.tablet_image}
            />
            <Image
              src={`/project-media/${project.image}.png`}
              alt={project.name}
              fill
              style={{ objectFit: 'cover' }}
              className={styles.mobile_image}
            /> */}
        {project_media?.map((el, i) => (
          <Center
            flexDir={`column`}
            key={i}
            className={styles.embed_container}
            // position={`relative`}
            style={{
              top: `${(25 * i) / (project_media_length - 1 || 0)}%`,
              left:
                index % 2 == 1
                  ? 'auto'
                  : `${(25 * i) / (project_media_length - 1 || 0)}%`,
              right:
                index % 2 == 1
                  ? `${(25 * i) / (project_media_length - 1 || 0)}%`
                  : 'auto'
            }}
          >
            {el.title && (
              <Text
                className={styles.image_title}
                display={`flex`}
                flexWrap={`wrap`}
                gap={`10px`}
              >
                {el.title}{' '}
                {el?.demo && (
                  <a href={el?.demo} rel='noopener noreferrer' target='_blank'>
                    <FiExternalLink />
                  </a>
                )}
              </Text>
            )}
            <embed
              src={el?.url}
              style={{
                backgroundColor: '#111111'
              }}
            />
          </Center>
        ))}
      </Box>

      <Box
        as='a'
        href={project.url}
        rel='noopener noreferrer'
        target='_blank'
        className={styles.projectDescription}
        position={{ base: `relative`, lg: `absolute` }}
        left={{ base: `auto`, lg: index % 2 == 1 ? '0px' : 'auto' }}
        right={{ base: `auto`, lg: index % 2 == 1 ? 'auto' : '0px' }}
        backgroundColor={{ base: `var(--light-navy)`, lg: `transparent` }}
      >
        <p className={styles.caption}>Featured Project</p>
        <h3 className={styles.projectTitle}>
          <a href={project.url} rel='noopener noreferrer' target='_blank'>
            {project.name}
          </a>
        </h3>
        <div className={styles.description}>
          <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
        </div>
        <ul className={styles.projectTechList}>
          {project.technologies.map((tech) => (
            <li key={Math.random()}>{tech}</li>
          ))}
        </ul>
        <div className={styles.links}>
          {project.github && (
            <a href={project.github} rel='noopener noreferrer' target='_blank'>
              <FiGithub />
            </a>
          )}
          <a href={project.url} rel='noopener noreferrer' target='_blank'>
            <FiExternalLink />
          </a>
        </div>
      </Box>
    </Flex>
  );
};
