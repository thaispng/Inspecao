function Table() {
    return(
        <div className='flex bg-neutral-300 rounded p-2'>
             <table className=''>
            <thead>
                <tr className='text-neutral-500'>
                    <th className='font-medium'>Nome</th>
                    <th className='font-medium' >Idade</th>
                    <th className='font-medium'>Profissão</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>João</td>
                    <td>25</td>
                    <td>Desenvolvedor</td>
                </tr>
                <tr>
                    <td>Maria</td>
                    <td>22</td>
                    <td>Designer</td>
                </tr>
                <tr>
                    <td>José</td>
                    <td>30</td>
                    <td>Engenheiro</td>
                </tr>
            </tbody>
        </table>

        </div>

    )
}

export default Table;