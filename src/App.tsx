
import './App.css';
import * as React from 'react';


class Position {
  constructor(public x: number, public y: number) {}
}

class Knight {
  static moves = [
    new Position(2, 1),
    new Position(2, -1),
    new Position(-2, 1),
    new Position(-2, -1),
    new Position(1, 2),
    new Position(1, -2),
    new Position(-1, 2),
    new Position(-1, -2)
  ];

  constructor(public position: Position) {}

  getMoves(): Position[] {
    const moves: Position[] = [];
    for (const move of Knight.moves) {
      const x = this.position.x + move.x;
      const y = this.position.y + move.y;
      if (x >= 0 && x < 8 && y >= 0 && y < 8) {
        moves.push(new Position(x, y));
      }
    }
    return moves;
  }
}

const App: React.FunctionComponent = () => {
  const [state, setState] = React.useState<{ x: number; y: number; moves: Position[] }>({
    x: 0,
    y: 0,
    moves: []
  });

  const handleXChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, x: Number(event.target.value) });
  };

  const handleYChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, y: Number(event.target.value) });
  };

  const handleFindClick = () => {
    const knight = new Knight(new Position(state.x, state.y));
    setState({ ...state, moves: knight.getMoves() });
  };

  return (
    
    <div className="app">
      <h1>Position of a Knight on chessboard</h1>
      <div className="form-control">
      
        <label htmlFor="x-input">X-Position:</label>
        <input
          id="x-input"
          type="number"
          value={state.x}
          onChange={handleXChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="y-input">Y-Position:</label>
        <input
          id="y-input"
          type="number"
          value={state.y}
          onChange={handleYChange}
        />

      </div>
      
      <button onClick={handleFindClick}>Find</button>
      <div>
        <h3>Possible positions:</h3>
        <ul className="move-list">
          {state.moves.map((move) => (
            <li key={`${move.x},${move.y}`}
            >({move.x}, {move.y})</li>
          ))}
        </ul>
      </div>
      

    </div>
  );
};


export default App;
// The App function is a functional component
// const App: React.FC = () => {
//   const [state, setState] = React.useState<{ x: number, y: number, moves: Position[] }>({
//     x: 0, // The x-position of the knight
//     y: 0, // The y-position of the knight
//     moves: [] // The possible positions the knight can move to
//   });

//   // Handles changes to the x-position input field
//   const handleXChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setState({ ...state, x: Number(event.target.value) });
//   };

//   // Handles changes to the y-position input field
//   const handleYChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setState({ ...state, y: Number(event.target.value) });
//   };

//   // Handles clicks on the Find button
//   const handleFindClick = () => {
//     const moves = Knight.getMoves({ x: state.x, y: state.y });
//     setState({ ...state, moves });
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="x-input">X-Position:</label>
//         <input id="x-input" type="number" value={state.x} onChange={handleXChange} />
//       </div>
//       <div>
//         <label htmlFor="y-input">Y-Position:</label>
//         <input id="y-input" type="number" value={state.y} onChange={handleYChange} />
//       </div>
//       <button onClick={handleFindClick}>Find</button>
//       <div>
//         Possible positions:
//         <ul>
//           {state.moves.map((move) => (
//             <li key={`${move.x},${move.y}`}>({move.x}, {move.y})</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default App;
