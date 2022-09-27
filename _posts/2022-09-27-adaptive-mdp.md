---
layout: post
title: Manhattan Ride-hail Markov Decision Process Congestion Game
---

My latest python package for modeling ride-hail driver competition is live on github at [github.com/lisarah/manhattan_MDP_queue_game](https://github.com/lisarah/manhattan_MDP_queue_game). This model cleans up ride-hail demand data from  [Taxi and Limousine Commission](https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page) and builds a Markov decision process for the ride-hail drivers. 
<img src="/photos/queue_game_unconstrained.gif" width="300" height="250"/>
<img src="/photos/toll_queue_game_constrained.gif" width="300" height="250"/>

<!-- <img src="https://github.com/lisarah/manhattan_MDP_queue_game/blob/6cd39b9f19cec06f60ba042b86b64a6d52192c2f/grad_res/toll_queue_game_unconstrained.gif" width="300" height="250"/>
<img src="https://github.com/lisarah/manhattan_MDP_queue_game/blob/794ae3b38e682fc7413222cc4848625e4b7ade4c/grad_res/toll_queue_game_constrained.gif" width="300" height="250"/> -->
<!--more-->

For more details on modeling assumptions, algorithms used, please see [our paper](https://arxiv.org/abs/1907.08912).

If you use our work, please cite! 
```
@article{li2019adaptive,
  title={Adaptive Constraint Satisfaction for Markov Decision Process Congestion Games: Application to Transportation Networks},
  author={Li, Sarah HQ and Yu, Yue and Miguel, Nicolas and Calderone, Dan and Ratliff, Lillian J and Acikmese, Behcet},
  journal={arXiv preprint arXiv:1907.08912},
  year={2019}
}
```