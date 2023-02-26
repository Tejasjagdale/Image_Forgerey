# RRU-Net: The Ringed Residual U-Net for Image Splicing Forgery Detection
This repository is for paper ["RRU-Net: The Ringed Residual U-Net for Image Splicing Forgery Detection"](http://openaccess.thecvf.com/content_CVPRW_2019/html/CV-COPS/Bi_RRU-Net_The_Ringed_Residual_U-Net_for_Image_Splicing_Forgery_Detection_CVPRW_2019_paper.html) (CVPR 2019 workshop)

## Update (2022.7.31)
I upload the dataset which is used to train RRU-Net in my another repository <https://github.com/yelusaleng/SAN_and_HDU-Net>.

## Update (2022.7.9)
The uploaded model 'best_model' is trained on new datasets generated by my new work "Image splicing forgery detection by combining synthetic adversarial networks and hybrid dense U‐net based on multiple spaces".

```shell
@article{Wei2022ImageSF,
  title={Image splicing forgery detection by combining synthetic adversarial networks and hybrid dense U‐net based on multiple spaces},
  author={Yang Wei and Jianfeng Ma and Zhuzhu Wang and Bin Xiao and Wenying Zheng},
  journal={International Journal of Intelligent Systems},
  year={2022}
}
```

Although the new work was completed two years ago, it was not accepted until recently.

TODO:
- I will upload the whole project of my new work, it contains a new approach to generate splicing forgery image.

------

## Update (2020.12.15)
Upload the pre-trained model.

NOTICING: 
- the uploaded pre-trained model is trained with new datasets since i lost previous pre-trained model.
- the new dataset is produced by my new work, so i can't release it currently.

------

## Requirements
- Python 3.7
- PyTorch 1.0+ 
- CUDA 10.0+

## Details
 - './unet/unet-parts.py': it includes detailed implementations of 'U-Net', 'RU-Net' and 'RRU-Net'
 - 'train.py': you can use it to train your model
 - 'predict.py': you can use it to test

## Citation
Please add following information if you cite the paper in your publication:
```shell
@inproceedings{bi2019rru,
  title={RRU-Net: The Ringed Residual U-Net for Image Splicing Forgery Detection},
  author={Bi, Xiuli and Wei, Yang and Xiao, Bin and Li, Weisheng},
  booktitle={Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition Workshops},
  pages={0--0},
  year={2019}
}
```

Contact yale ywei9395@gmail.com for any further information.