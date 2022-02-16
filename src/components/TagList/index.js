import React from 'react';
import { StyledTagItem, StyledTagList } from './TagListStyles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOffIcon from '@mui/icons-material/LocationOff';

const dummyTagId = [
  {
    id: 1,
    tagID: '49220',
    active: true,
  },
  {
    id: 2,
    tagID: '49115',
    active: false,
  },
  {
    id: 3,
    tagID: '49846',
    active: true,
  },
  {
    id: 4,
    tagID: '49783',
    active: false,
  },
  {
    id: 5,
    tagID: '49999',
    active: true,
  },
  {
    id: 6,
    tagID: '49111',
    active: true,
  },
  {
    id: 7,
    tagID: '12345',
    active: false,
  },
  {
    id: 8,
    tagID: '12345',
    active: false,
  },
  {
    id: 9,
    tagID: '12345',
    active: false,
  },
  {
    id: 10,
    tagID: '12345',
    active: true,
  },
  {
    id: 11,
    tagID: '12345',
    active: true,
  },
  {
    id: 12,
    tagID: '12345',
    active: false,
  },
  {
    id: 13,
    tagID: '12345',
    active: false,
  },
  {
    id: 14,
    tagID: '12345',
    active: true,
  },
  {
    id: 15,
    tagID: '12345',
    active: false,
  },
];

const TagItem = ({ tag }) => {
  return (
    <StyledTagItem isTagActive={tag.active}>
      {tag.active ? <LocationOnIcon /> : <LocationOffIcon />}
      {tag.tagID}
    </StyledTagItem>
  );
};

const TagList = () => {
  return (
    <StyledTagList>
      {dummyTagId.map((tag) => (
        <TagItem key={tag.id} tag={tag} />
      ))}
    </StyledTagList>
  );
};

export default TagList;
