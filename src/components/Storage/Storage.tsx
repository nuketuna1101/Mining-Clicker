import React, { useEffect, useState } from 'react';

interface Mineral {
    id: number,
    name: string,
    quantity: number,
}


const Storage: React.FC = () => {

    const mineralMap: Map<string, Mineral> = new Map();

    mineralMap.set('diamond', { id: 1, name: 'diamond', quantity: 10 });
    mineralMap.set('gold', { id: 2, name: 'gold', quantity: 24 });

    return (
        <div>

        </div>
    );
};

export default Storage;
