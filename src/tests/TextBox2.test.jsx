import { render, screen } from "@testing-library/react";
import TextBox2 from "../components/TextBox2";
import userEvent from "@testing-library/user-event";

describe('TextBox componente', () => {

    let box;
    let button;
    beforeEach(() => {
        render(<TextBox2 />);
        box = screen.getByRole('caja', { name: 'es una caja' });
        button = screen.getByRole('button', { name: 'Pulsa para modificar el color del texto' });
    });

    it('la caja de texto se encuentra en el documento', () => {
        expect(box).toBeInTheDocument();
    });
    
    it('El color inicial es rosa', () => {

        expect(box).toHaveStyle({
            color: 'rgb(255,192,203)'
        });
    });
    
    it('comprobar si al pulsar el botón cambia el color del texto', async () => {
    
        const user = userEvent.setup()             
        await user.click(button);
        expect(box).toHaveStyle({
            color: 'rgb(0,0,0)'
        });
    });
});