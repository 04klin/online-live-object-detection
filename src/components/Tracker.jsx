const Tracker = (props) => {


  return (
    <div>

      <p>There are 80 classes in this model. Try to get them all!</p>
      <p>You have found {props.classes.length}/80!</p>
      {props.classes.map((foundClass, index) => (
        <div key={index}> {foundClass}</div>
      ))}
    </div>
  );
};
//https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts
//These are all the classes in coco-ssd
export default Tracker;
