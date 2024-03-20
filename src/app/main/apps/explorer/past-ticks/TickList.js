import { Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function TickList() {
    const ticks = [
        {
            tick: "13,048,651",
            arbitrated: false,
        },
        {
            tick: "13,048,631",
            arbitrated: false,
        },
        {
            tick: "13,0438,651",
            arbitrated: true,
        },

        {
            tick: "13,078,651",
            arbitrated: false,
        },
        {
            tick: "13,088,621",
            arbitrated: false,
        },
        {
            tick: "13,344,651",
            arbitrated: false,
        },
        {
            tick: "13,028,651",
            arbitrated: false,
        },
        {
            tick: "33,048,651",
            arbitrated: false,
        },
        {
            tick: "14,048,651",
            arbitrated: false,
        },
        {
            tick: "17,048,651",
            arbitrated: false,
        },
        {
            tick: "13,048,651",
            arbitrated: false,
        },
        {
            tick: "13,048,651",
            arbitrated: false,
        },
        {
            tick: "13,048,651",
            arbitrated: false,
        },
        {
            tick: "13,048,651",
            arbitrated: false,
        },
        {
            tick: "13,048,651",
            arbitrated: false,
        },
        {
            tick: "13,048,651",
            arbitrated: false,
        },
        {
            tick: "13,048,651",
            arbitrated: false,
        },
        {
            tick: "13,048,651",
            arbitrated: false,
        },
    ]
    return (
        <div className='flex justify-between gap-12 flex-1 flex-wrap'>
            {
                ticks.length > 0 &&
                (
                    ticks.map((item) => (
                        <Typography
                            component={Link}
                            className={`font-space font-500 ${item.arbitrated ? 'text-error-40' : 'text-gray-50'}`}
                            to={`/explorer/block/${item.tick}`}
                            key={item.tick}
                            role='button'
                        >
                            {item.tick}
                        </Typography>
                    ))
                )
            }
        </div>
    )
}

export default TickList;