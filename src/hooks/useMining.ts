import { useState } from 'react';
import mineralService from '../services/mineralService'
import countService from '../services/countService';

// 커스텀 훅: useMining
export const useMining = () => {

    const [progress, setProgress] = useState(0);
    const [animation, setAnimation] = useState(false);

    // addProgress : 현재 단계에선 10% 진행도 증가
    const addProgress = () => {
        // 클릭 횟수 증가
        countService.addClickCnt();
        // 랜덤하게 채광 진행도 증가
        const randValue = Math.floor(Math.random() * 100);
        setProgress(prevProgress => {
            let newProgress = prevProgress + randValue;
            // 채광도 100% 이상 도달시
            if (newProgress >= 100) {
                // 채광 성공 카운트, 랜덤한 광물 자원 획득
                countService.addMinedCnt();
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