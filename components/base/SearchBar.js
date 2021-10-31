import {IconButton, InputBase, styled} from "@mui/material";

const SearchBarStyled = styled("form")({
    backgroundColor: "rgba(121, 175, 219, 0.09)",
    borderRadius: "12px",
    boxShadow: "none",
    padding: "5px 10px",
    display: "flex",
    alignItems: "center",
    width: "100%"
})

const Input = styled(InputBase)({
    marginLeft: 1,
    flex: 1,

    "input": {
        color: "#1A6FB4",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 500,
        caretColor: "#1A6FB4",

        "&::placeholder": {
            color: "#1A6FB4",
            fontSize: "14pt"
        }
    }
})

const SearchIcon = () =>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 31 30">
      <g id="Layer_2" transform="translate(0.04)">
        <g id="search">
          <rect id="Rectangle_5" width="31" height="30" transform="translate(-0.04)" fill="#bccdd9" opacity="0"/>
          <path id="Path_16" d="M26.494,23.634l-4.51-4.294a9.747,9.747,0,0,0,2.242-6.207A10.382,10.382,0,0,0,13.613,3,10.382,10.382,0,0,0,3,13.133,10.382,10.382,0,0,0,13.613,23.267a10.828,10.828,0,0,0,6.5-2.141l4.5,4.307a1.371,1.371,0,0,0,1.884,0,1.227,1.227,0,0,0,0-1.8ZM5.653,13.133a7.786,7.786,0,0,1,7.96-7.6,7.786,7.786,0,0,1,7.96,7.6,7.786,7.786,0,0,1-7.96,7.6,7.786,7.786,0,0,1-7.96-7.6Z" transform="translate(0.98 0.8)" fill="#bccdd9"/>
        </g>
      </g>
    </svg>

const SearchBar = ({ value, onChange, onClickSearch }) => {
    const onInputChange = (e) => {
        onChange(e.target.value)
    }

    const onClickIcon = () => {
        if (value !== "") {
            onClickSearch()
        }
    }

    return (
        <SearchBarStyled>
            <Input
                value={value}
                onChange={onInputChange}
                placeholder="Search Food..."
                inputProps={{ 'aria-label': "search patients" }}
            />
            <IconButton onClick={onClickIcon} style={{ fontSize: "10px" }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </SearchBarStyled>
    )
}

export default SearchBar