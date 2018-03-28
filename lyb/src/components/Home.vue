<template>
	<el-container>
		<el-header>Header</el-header>
		<el-container>
			<el-aside>
				<el-row class="tac">
					<el-col :span="12">

						<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
							<el-menu-item index="1">
								<i class="el-icon-menu"></i>
								<span slot="title">我要留言</span>
							</el-menu-item>
							<el-menu-item index="2">
								<i class="el-icon-menu"></i>
								<span slot="title">留言板</span>
							</el-menu-item>
							<el-menu-item index="3">
								<i class="el-icon-menu"></i>
								<span slot="title">管理留言</span>
							</el-menu-item>
						</el-menu>
					</el-col>

				</el-row>

			</el-aside>
			<el-main>Main</el-main>
		</el-container>
	</el-container>
</template>

<script>
</script>

<style>
	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}
	
	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 100%;
	}
	
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 1000px;
	}
	
	body>.el-container {
		margin-bottom: 40px;
	}
	
	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}
	
	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>