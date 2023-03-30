import { useRouter } from 'next/router';

export default async function invite() {
  // function body

  const router = useRouter();

  return null;
}

export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: 'https://discord.com/oauth2/authorize?client_id=1004699301982773259&permissions=08&scope=bot%20applications.commands' });
  res.end();

  return {
    props: {},
  };
}
