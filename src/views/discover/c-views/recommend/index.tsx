import { useAppDispatch } from '@/store'
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import {
  // fetchBannerDataAction,
  // fetchHotRecommendAction,
  // fetchNewAlbumAction
  fetchRecommendDataAction,
  fetchRankingDataAction
} from './store/recommend'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'
import SettleSinger from './c-cpns/settle-singer'
import UserLogin from './c-cpns/user-login'
import HotAnchor from './c-cpns/hot-anchor'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    // dispatch(fetchBannerDataAction()),
    // dispatch(fetchHotRecommendAction()),
    // dispatch(fetchNewAlbumAction())
    dispatch(fetchRecommendDataAction()), dispatch(fetchRankingDataAction())
  }, [dispatch])
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
