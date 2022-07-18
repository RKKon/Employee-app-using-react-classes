//const elem = <h2>Hello World</h2>; // как нужно
//const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World'); // 1) div etc, 2)class(btn) 3) cодержимое тега

const text = 'Hello World'
const elem = (
  <div> {/* in html was class, in react only className, in htm - for, in react - htmlFor */}
    <h2 className='text'>{text}</h2> {/* нельзя помещать объект пример {{}}, {obj}, {new Date()} */}
    <input type="text" /> {/* не забывать закрывать теги */}
    <button tabIndex={0}>btn</button>
  </div> // всегда иметь обертку
);
