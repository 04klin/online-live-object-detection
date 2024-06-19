import { useEffect, useState } from "react";

const Tracker = (props) => {
  const [classes, setClasses] = useState([]);

  const checkDuplicates = () => {
    const guesses = props.predictions;
    const newClasses = [...classes];
    for (let i = 0; i < guesses.length; i++) {
      if (!newClasses.includes(guesses[i].class)) {
        newClasses.push(guesses[i].class);
      }
    }
    setClasses(newClasses);
  };

  useEffect(() => {
    checkDuplicates();
  }, [props.predictions]);

  return (
    <div>
      <p>There are 80 classes in this model. Try to get them all!</p>
      <p>You have found {classes.length}/80!</p>
      {classes.map((foundClass, index) => (
        <div key={index}> {foundClass}</div>
      ))}
    </div>
  );
};
//https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts
//These are all the classes in coco-ssd
export default Tracker;
