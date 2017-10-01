<template>
	<div class="container">
		<div class="row">
			<h2 class="text-center">Bootstrap styling for Datatable</h2>
		</div>
		<div class="row">
			<div class="col-md-12">
				<table id="datatable" class="table table-striped table-bordered" cellspacing="0" width="100%">
					<thead>
						<tr>
							<th>Name</th>
							<th>Position</th>
							<th>Office</th>
							<th>Age</th>
							<th>Start date</th>
							<th>Salary</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tfoot>
						<tr>
							<th>Name</th>
							<th>Position</th>
							<th>Office</th>
							<th>Age</th>
							<th>Start date</th>
							<th>Salary</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</tfoot>
					<tbody>
						<tr>
							<td>Tiger Nixon</td>
							<td>System Architect</td>
							<td>Edinburgh</td>
							<td>61</td>
							<td>2011/04/25</td>
							<td>$320,800</td>
							<td>
								<p data-placement="top" data-toggle="tooltip" title="Edit">
									<button class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit">
										<span class="glyphicon glyphicon-pencil"></span>
									</button>
								</p>
							</td>
							<td>
								<p data-placement="top" data-toggle="tooltip" title="Delete">
									<button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete">
										<span class="glyphicon glyphicon-trash"></span>
									</button>
								</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'hello',
	data() {
		return {
		}
	},
	methods: {
		// async loadCategory () {
		//   try {
		//     const categories = await Services.getCategory()
		//     this.categories = categories.data
		//   } catch (e) {
		//     console.log(e)
		//     this.$emit('error', 'defaultError')
		//   }
		// }
	},
	created() {
		// this.categories = categories;
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
. title {}

.description {
	min-height: 200px;
}

.panel {
	border: 1px solid #f4511e;
	border-radius: 0;
	transition: box-shadow 0.5s;
}

.panel:hover {
	box-shadow: 5px 0px 40px rgba(0, 0, 0, .2);
}

.panel-footer .btn:hover {
	border: 1px solid #f4511e;
	background-color: #fff !important;
	color: #f4511e;
}

.panel-heading {
	color: #fff !important;
	background-color: #f4511e !important;
	padding: 10px;
	border-bottom: 1px solid transparent;
	border-top-left-radius: 0px;
	border-top-right-radius: 0px;
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
}

.panel-footer {
	background-color: #fff !important;
}

.panel-footer h3 {
	font-size: 32px;
}

.panel-footer h4 {
	color: #aaa;
	font-size: 14px;
}

.panel-footer .btn {
	margin: 15px 0;
	background-color: #f4511e;
	color: #fff;
}

.slideanim {
	visibility: hidden;
}

.slide {
	/* The name of the animation */
	animation-name: slide;
	-webkit-animation-name: slide;
	/* The duration of the animation */
	animation-duration: 1s;
	-webkit-animation-duration: 1s;
	/* Make the element visible */
	visibility: visible;
}



/* Go from 0% to 100% opacity (see-through) and specify the percentage from when to slide in the element along the Y-axis */

@keyframes slide {
	0% {
		opacity: 0;
		transform: translateY(70%);
	}
	100% {
		opacity: 1;
		transform: translateY(0%);
	}
}

@-webkit-keyframes slide {
	0% {
		opacity: 0;
		-webkit-transform: translateY(70%);
	}
	100% {
		opacity: 1;
		-webkit-transform: translateY(0%);
	}
}
</style>
