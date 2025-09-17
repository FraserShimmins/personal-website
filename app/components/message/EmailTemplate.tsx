import * as React from 'react';
import { Html, Button } from "@react-email/components";

export function EmailTemplate(props : {url: string}) {
  const { url } = props;

  return (
    <Html lang="en">
      <Button href={url}>Click me</Button>
    </Html>
  );
}