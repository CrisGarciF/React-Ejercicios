export const monyFormat = amount => {
    return amount.toLocaleString("en-US",{
        style: "currency",
        currency: "USD"
    })
}