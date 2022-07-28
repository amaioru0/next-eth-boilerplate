import Head from "next/head";
import { Heading, Link, Text, Code, Flex, Box, Button } from "@chakra-ui/react";
import DarkModeSwitch from 'components/core/DarkModeSwitch';

export default function Index() {
  return (
    <>
          <DarkModeSwitch />
      <h1>Hi mom</h1>
      <Button>Hey</Button>
    </>
  );
}