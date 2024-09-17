import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap'; // Importando o Dropdown do Bootstrap

function DropdownMenu() {
    return (
        <div className="mb-3">
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-alunos">
                    ALUNOS
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/listar">Listar</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/criar">Criar</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default DropdownMenu;