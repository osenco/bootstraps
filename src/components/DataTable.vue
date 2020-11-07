<template>
	<table class="table table-tranx pmd-table px-3">
		<thead v-if="header">
			<tr class="tb-tnx-head">
				<th class="tb-tnx-id">
					<span>#</span>
				</th>
				<th
					v-for="(c, i) in columns"
					:key="i"
					:class="`tb-tnx-${c.id}`"
				>
					{{ c.label }}
				</th>
				<th class="tb-tnx-action">
					<span>&nbsp;</span>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr
				class="tb-tnx-item"
				v-for="(r, i) in records"
				:key="i"
				:data-id="r.id"
			>
				<td class="tb-tnx-id">
					<div class="custom-control custom-checkbox"></div>
				</td>
				<td
					v-for="(c, s) in columns"
					:key="s"
					:data-title="c.label"
					:class="`tb-tnx-${c.slug}`"
				>
					{{ r[c.slug] }}
				</td>
				<td class="tb-tnx-action">
					<div class="dropdown">
						<a
							class="text-soft dropdown-toggle btn btn-icon btn-trigger"
							data-toggle="dropdown"
						>
							<em class="icon ni ni-more-h"></em>
						</a>
						<div
							class="dropdown-menu dropdown-menu-right dropdown-menu-xs"
						>
							<ul class="link-list-plain">
								<li>
									<router-link :to="`/${table}/${r.id}`">
										View
									</router-link>
								</li>
								<li>
									<router-link :to="`/${table}/${r.id}/edit`">
										Edit
									</router-link>
								</li>
								<li>
									<a
										data-toggle="modal"
										href="#deleteItem"
										@click="bSetRecord(r.id)"
									>
										Delete
									</a>
								</li>
							</ul>
						</div>
					</div>
				</td>
			</tr>
			<tr class="tb-tnx-head" v-if="columns">
				<td :colspan="columns.length + 2">
					<div class="modal fade" tabindex="-1" id="deleteItem">
						<div class="modal-dialog" role="document">
							<div class="modal-content">
								<div
									class="modal-body modal-body-lg text-center"
								>
									<form
										class="nk-modal"
										@submit.prevent="bDeleteRecord"
										v-show="!bHideModal"
									>
										<em
											class="nk-modal-icon icon icon-circle icon-circle-xxl ni ni-cross bg-danger"
										>
										</em>
										<h4 class="nk-modal-title">
											Confirm action
										</h4>
										<div class="nk-modal-text">
											<p class="lead">
												Are you sure you want to delete
												record?
											</p>
											<p class="text-soft">
												This action cannot be undone.
											</p>
										</div>
										<div
											class="nk-modal-action mt-5 justify-content-between"
										>
											<button
												class="btn btn-lg btn-light mr-3"
												data-dismiss="modal"
											>
												Cancel
											</button>
											<button
												type="submit"
												class="btn btn-lg btn-danger"
											>
												Yes, delete
											</button>
										</div>
									</form>

									<div class="nk-modal" v-if="bHideModal">
										<em
											class="nk-modal-icon icon icon-circle icon-circle-xxl ni ni-check bg-success"
										>
										</em>
										<h4 class="nk-modal-title">
											Successfully deleted record.
										</h4>
										<div class="nk-modal-text d-none">
											<p class="lead">
												This message will disappear in
												30s
											</p>
										</div>

										<div
											class="nk-modal-action mt-5 justify-content-between"
										>
											<button
												class="btn btn-lg btn-primary mt-3"
												data-dismiss="modal"
											>
												Close now
											</button>
										</div>
									</div>
								</div>

								<!-- .modal-body -->
							</div>
						</div>
					</div>
				</td>
			</tr>
		</tbody>
		<tfoot v-if="footer">
			<tr class="tb-tnx-head">
				<th class="tb-tnx-id">
					<span>#</span>
				</th>
				<th
					v-for="(c, i) in columns"
					:key="i"
					:class="`tb-tnx-${c.id}`"
				>
					{{ c.label }}
				</th>
				<th class="tb-tnx-action">
					<span>&nbsp;</span>
				</th>
			</tr>
		</tfoot>
	</table>
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue";

	export default defineComponent({
		props: {
			records: Array,
			columns: Array,
			table: String,
			header: {
				type: Boolean,
				default: false,
			},
			footer: {
				type: Boolean,
				default: false,
			},
		},

		setup(props, { emit }) {
			const record = ref(0);
			const bHideModal = ref(true);
			//const timeToClose = ref(0);

			function bSetRecord(r: number) {
				record.value = r;
				bHideModal.value = false;
			}

			async function bDeleteRecord() {
				emit("delete", record.value);
				bHideModal.value = true;
				// http.delete(`/${props.table}/${record.value}`).then((res) => {
				//
				// 	timeToClose.value = 30;
				// });
			}

			// watch(timeToClose, v => {
			// 	if (v > 0) {
			// 		setTimeout(() => {
			// 			if (timeToClose.value === 0) {
			// 				router.push(`/${props.table}`);
			// 			} else {
			// 				timeToClose.value -= 1;
			// 			}
			// 		}, 300);
			// 	}
			// });

			return { record, bSetRecord, bDeleteRecord, bHideModal }; //timeToClose
		},
	});
</script>
