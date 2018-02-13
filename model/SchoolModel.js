import Base from '../model/BaseModel'

export default class SchoolModel extends Base {

	constructor(data) {
		super(data);
	}

	getLessionListInfo(query) {
		let lessionInfo = [];
		if (query) {
			lessionInfo = this.DBCon.select('*').from('tbl_lession_info')
				.join('tbl_doctor', 'tbl_lession_info.lession_doctor', '=', 'tbl_doctor.id')
				.where(query)
				.select(
					"lession_title",
					"usr_name as lession_doctor_name",
					"lession_doctor",
					"start_time",
					"lession_class",
					"lession_id"
				);
		} else {
			lessionInfo = this.DBCon.select('*').from('tbl_lession_info')
				.join('tbl_doctor', 'tbl_lession_info.lession_doctor', '=', 'tbl_doctor.id')
				.select(
					"lession_title",
					"usr_name as lession_doctor_name",
					"lession_doctor",
					"start_time",
					"lession_class",
					"lession_id"
				);
		}
		return lessionInfo;
	}

	getPostInfo(query) {
		let postDatas = [];
		if (query) {
			postDatas = this.DBCon.select('*').from('tbl_post').join('tbl_doctor', 'tbl_post.pst_doctor', '=', 'tbl_doctor.id').where(query);
		} else {
			postDatas = this.DBCon.select('*').from('tbl_post').join('tbl_doctor', 'tbl_post.pst_doctor', '=', 'tbl_doctor.id');
		}
		return postDatas;
	}

	getCommmentInfo(query) {
		let comments = [];
		if (query) {
			comments = this.DBCon.from('tbl_comment')
				.join('tbl_doctor', 'tbl_comment.cmt_doctor', '=', 'tbl_doctor.id')
				.where(query)
				.select(
					"comment_id",
					"cmt_content as content",
					"usr_name as name",
					"cmt_doctor"
				);
		} else {
			comments = this.DBCon
				.from('tbl_comment')
				.join('tbl_doctor', 'tbl_comment.cmt_doctor', '=', 'tbl_doctor.id')
				.select(
					"comment_id",
					"cmt_content as content",
					"usr_name as name",
					"cmt_doctor"
				);
		}
		return comments;

	}

	getPostCommentInfo(query) {
		postCommentInfo = [];
		if (query) {
			postCommentInfo = this.DBCon.select('*').from('tbl_comment')
				.join('tbl_post', 'tbl_post.post_id', '=', 'tbl_comment.cmt_pst_id')
				.where(query);
		} else {
			postCommentInfo = this.DBCon.select('*').from('tbl_comment')
				.join('tbl_post', 'tbl_post.post_id', '=', 'tbl_comment.cmt_pst_id');
		}
		return postCommentInfo;
	}

	savePostInfo(saveData, id) {
		if (id) {
			return this.DBCon('tbl_post').where({
				'post_id': id
			}).update(saveData);

		} else {
			return this.DBCon('tbl_post').insert(saveData);

		}

	}

	saveCommentInfo(saveData, id) {

		if (id) {
			return this.DBCon('tbl_comment').where({
				'comment_id': id
			}).update(saveData);
		} else {
			return this.DBCon('tbl_comment').insert(saveData);
		}
	}

	deletePostInfo(query) {
		if (query) {
		 return this.DBCon.from('tbl_post').where(query).del();
		} else {
			return false;
		}

	}

	deleteCommentInfo(query) {
		if (query) {
   		return  this.DBCon.from('tbl_comment').where(query).del();
		} else {
			return false;
		}
	}
}
