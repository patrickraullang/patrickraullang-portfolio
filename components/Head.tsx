import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Patrick Raul Lang is a Master Student, Software Developer, and UI/UX Designer that likes to build things and see how they turn out."
      />
      <meta
        name="keywords"
        content="Patrick Raul Lang, Patrick, Lang, web developer portfolio, patrick raul lang web developer, patrick lang developer, patrick raul lang portfolio, patrick lang portfolio"
      />
      <meta property="og:title" content="Patrick Raul Lang's Portfolio" />
      <meta
        property="og:description"
        content="A developer and UI/UX Designer building projects that are at least useable."
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Nitin Ranganath',
};
