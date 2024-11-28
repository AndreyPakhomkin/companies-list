import React, { useState } from "react";
import { Company } from "../store";
import * as S from "../styled/StyledTableRow"

interface CompanyRowProps {
    company: Company;
    isSelected: boolean;
    onSelect: (id: number) => void;
    onUpdate: (updatedCompany: Company) => void;
}

const TableRow: React.FC<CompanyRowProps> = React.memo(
  ({ company, isSelected, onSelect, onUpdate }) => {
    return (
        <S.Row>
            <S.TD>
                <S.CheckBox
                    type="checkbox"
                    checked={isSelected}
                    placeholder="check"
                    onChange={() => onSelect(company.id)}
                />
            </S.TD>
            <S.TD>
                <S.Cell
                    type="text"
                    placeholder="companyName"
                    value={company.name}
                    onChange={(e) => onUpdate({ ...company, name: e.target.value })}
                />
            </S.TD>
            <S.TD>
                <S.Cell
                    type="text"
                    placeholder="companyLoc"
                    value={company.address}
                    onChange={(e) => onUpdate({ ...company, address: e.target.value })}

                />
            </S.TD>
        </S.Row>
    )
})

export default TableRow