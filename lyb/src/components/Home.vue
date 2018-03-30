<template>
	<el-container style="height: 900px;">
		<el-header>
			<h1 style="color: white;">学生留言板</h1>
		</el-header>
		<el-container style="height: 100%;width: auto;">
			<el-aside style="height: 100%;width: 250px;border-right: solid 1px #e6e6e6;">
				<el-row class="tac" >
					<el-col>

						<el-menu default-active="1" class="el-menu-vertical-demo" @close="handleClose">
						<router-link to="/lyb">	<el-menu-item index="1">

								<span slot="title">留言板</span>
							</el-menu-item></router-link>
							<router-link to="/xly"><el-menu-item index="2">

								<span slot="title">写留言</span>
							</el-menu-item></router-link>
							<router-link to="/login"><el-menu-item index="3">

								<span slot="title">留言管理系统</span>
							</el-menu-item></router-link>
						</el-menu>
					</el-col>

				</el-row>
			</el-aside>
			<el-main>

			<router-view></router-view>

			</el-main>
		</el-container>
	</el-container>
</template>

<script>

</script>

<style>
	.el-header,
	.el-footer {
		background-color: rgb(64, 158, 255);
	}
	body{
	 margin: 0px;
	}
</style>
