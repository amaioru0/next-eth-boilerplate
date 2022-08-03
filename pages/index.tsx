import React, { useState, useEffect, useRef, ReactNode, ReactText } from 'react';
import type { NextPage } from 'next'
import Head from "next/head";
import dynamic from 'next/dynamic'
import DarkModeSwitch from 'components/core/DarkModeSwitch';
import {useSelector, useDispatch} from 'react-redux'
import {
  Code,
  Button,
  ButtonGroup,
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Text,
  Heading,
  chakra,
  useColorModeValue,
  Stack,
  Link,
  useDisclosure,
  Input
} from '@chakra-ui/react';
import {
  IconButton,
  Avatar,
  CloseButton,
  HStack,
  VStack,
  Icon,
  Drawer,
  DrawerContent,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiTrello,
  FiBox
} from 'react-icons/fi';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import Loader from 'components/core/Loader';
import { ConnectButton } from '@rainbow-me/rainbowkit';


import { extendTheme, theme } from "@chakra-ui/react";
import JSONPretty from 'react-json-pretty';
import { HyperThemeEditor } from '@hypertheme-editor/chakra-ui'

import HomeContainer from 'container/HomeContainer';

const Index: NextPage = () => {

  return (
    <HomeContainer />
  );
}

export default Index;