for (let i = 0; i < 8; i++)
{
    let row=" "
    for (j = 0; j < 8; j++) {
        if ((i + j) % 2 == 0)
            row +="#"
        else
            row+=" "

            
    }
    console.log(row)
}
