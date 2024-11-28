import React from "react";
import * as S from "../styled/StyledHeader";

interface HeaderProps {
    onDeletion: React.MouseEventHandler<HTMLButtonElement>;
    onAddition: React.MouseEventHandler<HTMLButtonElement>;
}

const Header: React.FC<HeaderProps> = ({onDeletion, onAddition}) => {
    return (
        <S.Wrap>
            <S.Title>Companies Table</S.Title>
            <S.Buttons>
                <S.BtnDelete onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onDeletion(e)}>
                    Delete selected
                </S.BtnDelete>
                <S.BtnAdd onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onAddition(e)}>
                    Add a company
                </S.BtnAdd>
            </S.Buttons>
        </S.Wrap>
    )
}

export default Header;