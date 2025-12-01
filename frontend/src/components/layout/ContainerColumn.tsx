import React from "react";

<style>
	{`
    .container{ 
        display: flex;
        flex-direction: column;
        width: 100%;
        columns
    }`}
</style>;

interface ContainerColumnProps {
	columns: number;
}

const ContainerColumn = ({ columns }: ContainerColumnProps): React.JSX.Element => {
	return <div className='container'></div>;
};

export default ContainerColumn;
