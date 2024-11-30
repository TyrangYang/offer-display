import { FC } from 'react';
import { ICellRendererParams } from '@ag-grid-community/core';
const LogoRenderer: FC<ICellRendererParams> = (params) => {
    return (
        <a href={params.data.link} target="_blank">
            <span className="imgSpanLogo">
                {params.value && (
                    <img
                        // alt={`${params.value}`}
                        src={`${params.value}`}
                        className="logo"
                    />
                )}
            </span>
        </a>
    );
};
export default LogoRenderer;
