import React, { useEffect, useState } from 'react';
import { StyledIframe, StyledMap } from './MapStyles';
import axios from 'axios';
import '../../lib/md5';
import '../../lib/salt_config';
import { salt_en_val } from '../../lib/salt_config';
import { md5 } from '../../lib/md5';

const Map = () => {
  const [baseURL, setBaseURL] = useState('http://192.168.0.6:8180');
  const [url, setURL] = useState('http://192.168.0.6:8180/localsense');
  // const [baseURL, setBaseURL] = useState('');
  // const [url, setURL] = useState('/localsense');
  const [id, setId] = useState('admin');
  const [password, setPassword] = useState('Aa123456');

  const md5Password = (password) => {
    return md5(md5(password) + salt_en_val);
  };

  useEffect(() => {
    const loginToLocalSense = async () => {
      const response = await axios.get(
        `${baseURL}/login?username=${id}&password=${md5Password(password)}`
        // `/login?username=${id}&password=${md5Password(password)}`
      );
      console.log(response);
    };

    const redirectUrlToMap = async () => {
      setURL(`${baseURL}/localsense/#/SingleModule/index/overview`);
      // setURL(`/localsense/#/SingleModule/index/overview`);
    };

    loginToLocalSense();
    redirectUrlToMap();
  }, []);

  return (
    <StyledMap>
      <StyledIframe src={url} />
    </StyledMap>
  );
};

export default Map;
