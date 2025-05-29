import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";

const Home = () => {
  const [isSticky,setIsSticky] = useState(false);

  // const handleScroll = () => {
  //   const scrollY = window.scrollY > 0;
  //   setIsSticky(window.scrollY > 0)
  //   console.log("ScrollY:", scrollY);
  // };
  const handleScroll = () => {
    console.log("jgajsgsj");
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Banner
        headTitle="Build Faster With Confidence"
        description="Join our platform and explore new possibilities with modern tools."
      />
      <h1>Scroll Y Position: {0}px</h1>
      <div className={`${isSticky ? 'yes' : 'no'}`}>
        Sit cupidatat ea do adipisicing cupidatat exercitation ex eiusmod ex
        tempor irure mollit. Laborum irure ullamco laboris ipsum non duis
        voluptate commodo adipisicing. Ea dolor commodo fugiat occaecat minim ea
        duis duis velit reprehenderit aliqua. Sint excepteur esse irure proident
        est consectetur aliqua. Qui Lorem eu duis deserunt elit consectetur do
        irure ut. Culpa cillum exercitation deserunt adipisicing sit eiusmod
        officia do magna aliquip anim. Non in minim eiusmod eu ut incididunt.
        Aute ipsum ad amet dolore non mollit exercitation fugiat irure id in
        consectetur nostrud. Exercitation exercitation ipsum nulla ex. Officia
        qui exercitation anim sunt incididunt adipisicing adipisicing aute elit
        anim cillum. Amet occaecat magna amet nostrud mollit voluptate elit
        anim. Occaecat sit irure commodo sunt id est reprehenderit voluptate
        culpa id veniam eu ea. Qui exercitation sunt officia duis. Laboris velit
        enim dolor qui non sit est magna occaecat duis ut. Consectetur ipsum
        labore deserunt excepteur proident do pariatur et velit ex elit. Non ex
        eiusmod mollit do minim ipsum consectetur. Irure laborum culpa occaecat
        in quis anim sint esse anim qui. Ullamco ipsum consectetur laboris
        commodo fugiat minim duis amet nisi in non commodo sunt ipsum. Fugiat do
        eiusmod dolor et ipsum. Voluptate est anim in ex velit. Adipisicing enim
        do minim ad fugiat Lorem. Deserunt ullamco adipisicing ad fugiat ullamco
        nulla. Eiusmod excepteur quis mollit commodo reprehenderit cillum velit
        magna do anim. Sit adipisicing ex eiusmod ipsum sunt ut reprehenderit.
        Nisi labore anim dolor veniam elit aute voluptate. Excepteur occaecat
        cupidatat sit anim. Id pariatur nisi incididunt excepteur eu velit. Ex
        mollit eu fugiat officia deserunt. Deserunt in est officia ad. In veniam
        esse anim id tempor consequat sunt dolor consequat aliqua ad. Pariatur
        laborum consectetur consectetur quis ipsum sit proident amet eu
        consequat est cillum velit. Cillum anim eu mollit proident adipisicing
        amet culpa nulla. Incididunt ex sunt magna minim voluptate duis do quis
        consequat. Qui fugiat sint nisi fugiat occaecat est nostrud non et velit
        ut cillum. Anim minim exercitation ex id amet exercitation quis. Officia
        deserunt ad voluptate quis esse laboris est ut adipisicing anim sint.
        Consectetur ullamco ea occaecat mollit laboris dolor velit deserunt ea
        voluptate. Cupidatat sint ut consequat Lorem est tempor deserunt
        consequat dolore officia irure dolor elit magna. Amet fugiat incididunt
        fugiat do pariatur sint aliquip quis ut sunt aute culpa Lorem. Id nisi
        anim elit est nulla quis nostrud amet esse id in incididunt culpa
        aliqua. Culpa esse laboris velit enim dolore irure exercitation
        adipisicing elit aliquip. Et eu ut Lorem veniam aliqua pariatur officia.
        Nostrud cillum eu nisi ullamco labore. Dolore nulla commodo consequat
        culpa elit aute adipisicing adipisicing eiusmod. Voluptate est aute sit
        nulla irure proident excepteur ullamco eu esse excepteur dolore officia
        pariatur. Cupidatat labore incididunt veniam veniam magna incididunt ea
        nostrud dolor cillum officia aliqua aliquip ullamco. Tempor laborum amet
        magna reprehenderit nulla aliqua consequat et laboris ut nisi. Ullamco
        in deserunt non nisi adipisicing eu dolor commodo labore. Adipisicing
        est proident adipisicing pariatur magna consequat fugiat esse
        reprehenderit. Incididunt incididunt mollit sunt commodo in culpa fugiat
        enim exercitation anim exercitation culpa id. Ipsum sint eiusmod aliquip
        nulla magna sit elit incididunt. Mollit cupidatat cupidatat ex excepteur
        consectetur nostrud adipisicing occaecat. Laboris non eu sit in
        consectetur exercitation ut fugiat ad eiusmod culpa duis eiusmod. Lorem
        voluptate reprehenderit deserunt in sit ut exercitation ad occaecat
        dolor. Excepteur id ex sit reprehenderit pariatur ullamco sint fugiat
        non excepteur ut ex labore adipisicing.
      </div>
    </>
  );
};

export default Home;
