import tf from '@tensorflow/tfjs-node';

const loadModel = async () => {
  try {
    const model = await tf.loadGraphModel(process.env.MODEL_URL);
    console.log('Model loaded successfully');
    return model;
  } catch (error) {
    console.error('Failed to load the model:', error);
  }
};

export default loadModel;
