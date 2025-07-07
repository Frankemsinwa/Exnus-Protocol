'use client';

import Lottie from 'lottie-react';
import { stakingRewardsAnimation } from '@/lib/animation-data';

export default function StakingAnimation() {
  return <Lottie animationData={stakingRewardsAnimation} loop={true} className="w-full h-full" />;
}
