import { Game } from "../src/game";

describe("Game", () => {
    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    let game: Game;

    beforeEach(() => {
        canvas = document.createElement("canvas");
        canvas.id = "gameCanvas";
        canvas.height = 800;
        canvas.width = 600;
        document.body.appendChild(canvas);
        ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        game = new Game(canvas, ctx)
    })


  test("should initialize without errors", () => {
    expect(game).toBeDefined();
  });

});
