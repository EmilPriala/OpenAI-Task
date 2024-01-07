import './Ad.css';

export default function Ad(props) {
  return (
    <div className='main' style={{
      width: props.width,
      height: props.height,
      flexDirection: (props.height === props.imageHeight) ? "row" : "column",
    }}>
      <img src="https://placehold.co/500x200/f86068/f9cdcc?text=Image"
          style={{ width: props.imageWidth, height: props.imageHeight }} />

      <div className='text-div'>
        <h1 style={{ textAlign: "center" }}>{ props.text ?? "Text" }</h1>
        <button>
          <a href={ props.link }>
            <h1>{ props.button ?? "Call to Action" }</h1>
          </a>
        </button>
      </div>
    </div>
  )
}