// # Action name should be **setTheme**

export const setTheme = (val) => {
    return (
        {
            type: "change",
            payload: val
        }
    )
};
