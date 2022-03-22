<template>
	<view class="content">
		<view class="person">
			<picker mode="selector" :range="oldList" range-key="oldName" @change="oldPicker">
				<view class="title-item">
					<text>{{oldName}}</text>
				</view>
			</picker>
		</view>
		<view class="add_picture">
			<view class="many_photo" v-show="addVideo">
			  <image src="../../static/images/upload.png" @click="test"></image>
			</view>
			<view class="" v-show="showVideo" style="position: relative;">
				<video :src="src" style="video"></video>
				<image src="../../static/images/delete.png" @click="DelImg" class="close-img" style="height: 36rpx;"></image>
			</view>
		</view>	


	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '',
				showVideo:false,
				addVideo:true,
				oldName:'未选择',
				oldList:[],
				cameraList:[],
				oldId:'',
				roomId:'',
				cameraId:'',
				fileItem:[{
					oldId:'1111',
					roomId:'1111',
					cameraId:'1111',
					videoFile:'1111'
				}]
			}
		},
		onLoad() {
		this.getData()
		
		},
		methods: {
			//点击上传视频
			
			test: function () {
				
				let oldId = this.oldId
				let roomId = this.roomId
				let cameraId = this.cameraId
						    var self = this;
							if(oldId!=''&&roomId!=''&&cameraId!=''){
								
						    uni.chooseVideo({
						        count: 1,
						        sourceType: ['camera', 'album'],
						        success: function (res) {
									console.log("选择视频成功",res)
									self.showVideo=true
									self.addVideo=false
						            self.src = res.tempFilePath;

										uni.uploadFile({
											url: 'https://www.tangyihan.top/app/picture/VideoRecognition', //接口地址
											filePath: res.tempFilePath,
											name: 'videoFile',
											formData:{
												'oldId':oldId,
												'roomId':roomId,
												'cameraId':cameraId,
											},
											header: {
												// Authorization: 'Bearer ' + uni.getStorageSync('access')
												
											"Content-Type": "application/json",
												
											},
											 success: (uploadFileRes) => {
												 console.log(uploadFileRes)
												// console.log('1张', uploadFileRes);
												// let bold = JSON.parse(uploadFileRes.data)
												// console.log(bold)
												// console.log(bold.result[0].filePath)
												// self.returnImage = bold.result[0].filePath + bold.result[0].fileName
												// console.log("this.returnImage", self.returnImage)
											},
										
										});
								
									
						        }
						    });
							}else{
								uni.showToast({
									title: '请选择老人', //后台返回的错误情况
									icon:'none'
								})
							}
						},
			//右上角删除视频
				DelImg(){
							this.src='',
							this.showVideo=false,
							this.addVideo=true
						},
						getData(){
							this.$api.login.getOldList({
								userId:uni.getStorageSync('userId'),
								
								}
							).then(res => {
								if (res.msg == '成功' ) {
									console.log(res);
									this.oldList =res.data.bindOldList
									this.cameraList = res.data.oldMessagesList
								}
							}).catch(err => {
							
							})
						},
						oldPicker(e) {
							console.log(e)
							this.oldName = this.oldList[e.target.value].oldName
							this.oldId = this.oldList[e.target.value].oldId
							this.cameraId = this.cameraList[e.target.value].cameraId
							this.roomId = this.cameraList[e.target.value].roomId
							// console.log(this.oldList[e.target.value].oldId) //获取id
						},

		}
	}
</script>

<style>
	page{
		background-color: #f7f8f9;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

/deep/uni-video {
		margin-top: 20rpx;
		margin-left: 5%;
	
	}
	.close-img {
/* 		position: absolute;
		height: 36rpx !important;
		width: 36rpx !important;
		top: -18rpx;
		right: -18rpx; */
		width: 50rpx;
		height: 50rpx;
	}
	.person{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 750rpx;
		height: 60rpx;
		background-color: #ffffff;
		box-shadow: 0px 1px 5px 0px rgb(230, 230, 230);
		margin-bottom: 50rpx;
	}
	.title-item{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 750rpx;
		
	}
	.title-item text{
		color: #333333;
	}
	.line{
		margin-top: 100rpx;
	}
</style>
