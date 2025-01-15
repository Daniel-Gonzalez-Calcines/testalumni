import { render, screen } from "@testing-library/react";
import FormUsuario from "../components/FormUsuario";
import userEvent from "@testing-library/user-event";

describe('FormUsuario componente', () => {
    let box;
    let button;
    let textField;

    beforeEach(() => {
        render(<FormUsuario />);
        box = screen.getByRole('input', { name: "" });
        button = screen.getByRole('button', { name: 'Submit' });
        textField = screen.getByRole('textbox', { name: 'Nombre' });
    });

    it('el botón esta en el documento', () => {
        expect(button).toBeInTheDocument();
    });

    it('el campo de texto esta en el documento', () => {
        expect(textField).toBeInTheDocument();
    });

    it('la cabecera esta en el documento', () => {
        const header = screen.getByRole('heading', { level: 2 });
        expect(header).toBeInTheDocument();
    });

    it('Se borra el campo de texto al pulsar el boton', async () => {
        const user = userEvent.setup();

        await user.clear(textField);
        await user.type(textField, 'Esto se debe borrar');
        await user.click(button);

        expect(textField.value).toBe('');
    });
});