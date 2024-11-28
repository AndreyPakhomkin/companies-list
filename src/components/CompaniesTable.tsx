import React, { useRef, useState, useMemo, useEffect } from "react";
import TableRow from "./TableRow";
import { connect } from "react-redux";
import { RootState, Company, addCompany, deleteCompany, updateCompany } from '../store';
import Header from "./Header";
import * as S from "../styled/StyledCompaniesTable";

interface CompaniesTableProps {
    companies: Company[];
    addCompany: (company: Company) => void;
    deleteCompany: (id: number[]) => void;
    updateCompany: (company: Company) => void;
}

const CompaniesTable: React.FC<CompaniesTableProps> = ({ companies, deleteCompany, updateCompany, addCompany }) => {
    
    const [ visibleCount, setVisibleCount ] = useState<number>(40);
    const [ selectedCompanies, setSelectedCompanies ] = useState<Set<number>>(new Set());
    const [ allSelected, setAllSelected ] = useState<boolean>(false);

    const tableRef = useRef<HTMLDivElement>(null);

    const loadData = () => {
        setVisibleCount(prev => prev + 20)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (!tableRef.current) return;
            
            const table = tableRef.current

            const scrollTop = table.scrollTop
            const scrollHeight = table.scrollHeight
            const clientHeight = table.clientHeight

            if (scrollTop + clientHeight >= scrollHeight - 50) {
                if (visibleCount < companies.length) {
                    loadData();
                }
            }
        }

        const table = tableRef.current
        table?.addEventListener('scroll', handleScroll)

        return () => {
            table?.removeEventListener('scroll', handleScroll)
        }
    }, [visibleCount, companies.length])

    useEffect(() => {
        if (visibleCount > companies.length) {
            setVisibleCount(companies.length);
        }
        if (visibleCount === 0 && companies.length > 0) {
            setVisibleCount(Math.min(40, companies.length))
        }
    }, [companies, visibleCount]);

    const handleSelectCompany = (id: number) => {
        setSelectedCompanies(prev => {
            const newSelection = new Set(prev);
            if (newSelection.has(id)) {
                newSelection.delete(id)
            } else {
                newSelection.add(id)
            }
            return newSelection
        })
    }

    const handleDeleteComanies = () => {
        if (selectedCompanies.size === 0) return;

        let toDelete = Array.from(selectedCompanies);
        deleteCompany(toDelete);
        setSelectedCompanies(new Set());
        setAllSelected(false)
    }

    const handleUpdateCompany = (updatedCompany: Company) => {
        updateCompany(updatedCompany)
    }

    const handleAddCompany = () => {
        const newName = window.prompt("Enter company name")
        const newAddress = window.prompt("Enter company address")

        if (newName && newAddress) {
            const newCompany = {
                id: companies.length > 0 ? Math.max(...companies.map(c => c.id)) + 1 : 1,
                name: newName,
                address: newAddress
            }

            addCompany(newCompany)
        }
    }

    const handleSelectAll = () => {
        if (companies.length === 0) return;
        
        setSelectedCompanies(() => {
            if (!allSelected) {
                const selected: number[] = []
                companies.forEach((company) => {
                    selected.push(company.id)
                })
                return new Set(selected)
            } else {
                return new Set()
            }
        })
        setAllSelected(!allSelected)
    }

    const memoizedCompanies = useMemo<React.ReactNode[]>(() => {
        let showCompanies = companies.slice(0, visibleCount)
        return (
            showCompanies.map((company) => {
                return (
                    <TableRow
                        key={company.id}
                        company={company}
                        isSelected={selectedCompanies.has(company.id)}
                        onSelect={handleSelectCompany}
                        onUpdate={handleUpdateCompany}
                    />
                )
            }  
        )
    )}, [visibleCount, selectedCompanies, companies]) 

    return (
        <S.Wrap>
            <Header onDeletion={handleDeleteComanies} onAddition={handleAddCompany}/>
            <S.Container ref={tableRef}>
                <S.Table>
                    <S.THead>
                        <S.TR>
                            <S.THCheck>
                                <S.CheckBox
                                    type="checkbox"
                                    checked={allSelected}
                                    placeholder="checkAll"
                                    onChange={() => handleSelectAll()}
                                />
                            </S.THCheck>
                            <S.TH>COMPANY NAME</S.TH>
                            <S.TH>COMPANY ADDRESS</S.TH>
                        </S.TR>
                    </S.THead>
                    <S.TableBody>
                        {memoizedCompanies}
                    </S.TableBody>
                </S.Table>
            </S.Container>
        </S.Wrap>
    )
}

const mapStateToProps = (state: RootState) => ({
  companies: state.companies.companies
});

const mapDispatchToProps = {
  addCompany,
  deleteCompany,
  updateCompany,
};

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesTable);