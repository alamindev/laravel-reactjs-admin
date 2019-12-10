import React, { useEffect } from "react";
import DataTable from "react-data-table-component";

const FilterComponent = ({ filterText, onFilter, onClear }) => {
    const datatable_search_input = {
        border: "1px solid #3c3c3c",
        background: "#252525",
        color: "#fff",
        padding: "5px",
        borderRadius: "5px 0px 0 5px"
    };
    const datatable_search_btn = {
        padding: "5px 14px",
        borderRadius: "0px 5px 5px 0px",
        border: "none",
        background: "#444444"
    };
    return (
        <>
            <input
                id="search"
                type="text"
                style={datatable_search_input}
                placeholder="Filter By Name"
                value={filterText}
                onChange={onFilter}
            />
            <button onClick={onClear} style={datatable_search_btn}>
                X
            </button>
        </>
    );
};

export default function Datatable(props) {
    useEffect(() => {
        let all = document
            .querySelector(".data_table_all_class")
            .getElementsByTagName("*");
        for (let i = 0; i < all.length - 1; i++) {
            all[i].classList.add("text-secondary");
        }
    });
    const [filterText, setFilterText] = React.useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
        false
    );
    const filteredItems = props.data.filter(
        item => item.name && item.name.includes(filterText)
    );

    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText("");
            }
        };

        return (
            <FilterComponent
                onFilter={e => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
            />
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <div>
            <DataTable
                columns={props.columns}
                data={filteredItems}
                className={"data_table_all_class"}
                fixedHeader={true}
                pagination
                paginationResetDefaultPage={resetPaginationToggle}
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                persistTableHead
                dense
            />
        </div>
    );
}
