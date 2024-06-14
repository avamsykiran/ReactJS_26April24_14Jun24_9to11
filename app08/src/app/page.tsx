import Image from 'next/image';

const HomePage = () => (
  <section className="cols-sm-9 mx-auto p-4 border border-primary">
    <h3>Home Page</h3>

    <p>Hai All! Welcoem to my first NextJS application.</p>

    <div>
      <Image src="/imgs/namasthey.jpg" width={300} height={300} alt='Sorry! Failed to fetech the image' />
    </div>
  </section>
);

export default HomePage;