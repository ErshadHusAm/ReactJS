import React from 'react'

function MemoComp({count}) {
    console.log("Memo comp");
    return (
        <div>
            Memo comp {count}
        </div>
    )
}
export default React.memo(MemoComp)