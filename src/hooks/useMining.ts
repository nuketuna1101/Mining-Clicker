import { useState } from 'react';
import mineralService from '../services/mineralService'
import countService from '../services/countService';

// 커스텀 훅: useMining
export const useMining = () => {

    const [progress, setProgress] = useState(0);
    const [animation, setAnimation] = useState(false);

    // addProgress : 현재 단계에선 10% 진행도 증가
    const addProgress = () => {
        //clickCnt++;
        countService.addClickCnt();
        const randValue = Math.floor(Math.random() * 100);
        setProgress(prevProgress => {
            let newProgress = prevProgress + randValue;
            if (newProgress >= 100) {
                //minedCnt++;
                countService.addMinedCnt();
                // 광물 자원 획득 addMineral
                mineralService.addRandommineral();
                setAnimation(true);
                setTimeout(() => setAnimation(false), 1000); // 1초 동안 애니메이션을 실행
                newProgress = 0;
            }
            return newProgress;
        });
    };

    return {
        progress,
        animation,
        addProgress,
        minerals: mineralService.getAllMinerals(),
    };
}