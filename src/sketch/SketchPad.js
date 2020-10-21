import React, {useState, useRef, useEffect} from 'react';

function SketchPad() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  
  useEffect(() => {
    const canvas = canvasRef.current;
    //canvas.width = window.innerWidth * 2;
    //canvas.height = window.innerHeight * 2;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //canvas.style.width = `${window.innerWidth}px`;
    //canvas.style.height = `${window.innerHeight}px`;
    //canvas.height = 200
    //canvas.width = 200

    const context = canvas.getContext("2d")
    ///context.scale(2,2)
    context.lineCap = "round"
    context.strokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;
  }, [])

  const startDrawing = ({nativeEvent}) => {
    console.log("started")
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const finishDrawing = () => {
    console.log("finished")
    contextRef.current.closePath()
   setIsDrawing(false)
  }

  const draw = ({nativeEvent}) => {
    if(!isDrawing){
      return
    }
    const {offsetX, offsetY} = nativeEvent;

    if (offsetX === undefined){
      var rect = nativeEvent.target.getBoundingClientRect();
      var x = nativeEvent.targetTouches[0].pageX - rect.left;
      var y = nativeEvent.targetTouches[0].pageY - rect.top;
      contextRef.current.lineTo(x, y)
      contextRef.current.stroke()
      return
    }

    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }
  
  return (
    <div>
      <canvas
          className="canvas"
          
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          
          onTouchStart={startDrawing}
          onTouchEnd={finishDrawing}
          onTouchMove={draw}
          
          ref={canvasRef}
      />
    </div>
  )
}

export default SketchPad;