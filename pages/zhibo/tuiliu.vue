		<template>
			<view class="content">
				<view>
					<video src="rtmp://127.0.0.1:1935/live/123" style="width: 100vw;height: 400rpx;" :autoplay="true" controls></video>
				</view>
			<view>
				<live-pusher
					id="livePusher"
					ref="livePusher"
					class="livePusher"
					url=""  
					mode="SD"
					:muted="true"
					:enable-camera="true"
					:auto-focus="true"
					:beauty="1"
					whiteness="2"
					aspect="9:16"
					@statechange="statechange"
					@netstatus="netstatus"
					@error="error"
				></live-pusher>
				<button class="btn" @click="start">开始推流</button>
				<button class="btn" @click="pause">暂停推流</button>
				<button class="btn" @click="resume">resume</button>
				<button class="btn" @click="stop">停止推流</button>
				<button class="btn" @click="snapshot">快照</button>
				<button class="btn" @click="startPreview">开启摄像头预览</button>
				<button class="btn" @click="stopPreview">关闭摄像头预览</button>
				<button class="btn" @click="switchCamera">切换摄像头</button>
				<button class="btn" @click="bofang">去播放</button>
			</view>			
			</view>
		</template>

<script>
export default {
	data() {
		return {
			context:[]
		};
	},
	onReady() {
		// 注意：需要在onReady中 或 onLoad 延时
		this.context = uni.createLivePusherContext('livePusher', this);
	},
	methods: {
		statechange(e) {
			console.log('statechange:' + JSON.stringify(e));
		},
		netstatus(e) {
			console.log('netstatus:' + JSON.stringify(e));
		},
		error(e) {
			console.log('error:' + JSON.stringify(e));
		},
		start(){
			this.context.start({
				success: a => {
					console.log('livePusher.start:' + JSON.stringify(a));
				},
				error:err=>{
					console.log(err)
				}
			});
		},
		close() {
			this.context.close({
				success: a => {
					console.log('livePusher.close:' + JSON.stringify(a));
				}
			});
		},
		snapshot() {
			this.context.snapshot({
				success: e => {
					console.log(JSON.stringify(e));
				}
			});
		},
		resume() {
			this.context.resume({
				success: a => {
					console.log('livePusher.resume:' + JSON.stringify(a));
				}
			});
		},
		pause() {
			this.context.pause({
				success: a => {
					console.log('livePusher.pause:' + JSON.stringify(a));
				}
			});
		},
		stop() {
			this.context.stop({
				success: a => {
					console.log(JSON.stringify(a));
				}
			});
		},
		switchCamera() {
			this.context.switchCamera({
				success: a => {
					console.log('livePusher.switchCamera:' + JSON.stringify(a));
				}
			});
		},
		startPreview() {
			this.context.startPreview({
				success: a => {
					console.log('livePusher.startPreview:' + JSON.stringify(a));
				}
			});
		},
		stopPreview() {
			this.context.stopPreview({
				success: a => {
					console.log('livePusher.stopPreview:' + JSON.stringify(a));
				}
			});
		},
		bofang(){
			this.$u.route({
				url: 'pages/index/index'
			})
		}
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>

