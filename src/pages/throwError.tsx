import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({
  req,
}) => {
  if (req.headers['throw-error']) throw Error

  return {
    props: {},
  };
};

export default function Test() {
  return <p>Request this page with <code>throw-error</code> header</p>
}
