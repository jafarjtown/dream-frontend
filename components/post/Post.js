import { IoHeart,IoShare,IoChatboxEllipses,IoSave } from "react-icons/io5";
function Avatar({ url, w = 50, h = 50 }) {
	// if (url !== null & url !== undefined) return <Image loading='lazy' src={url} alt={url} width={w} height={h} className='avatar' />
	return <div className="avatar" />;
}
function Name({ user }) {
	if ((user.first_name !== "") & (user.last_name !== "")) {
		return user.first_name + " " + user.last_name;
	} else {
		return user.username;
	}
}

function Truncate({ text }) {
	if (text.length > 500) {
		return text.slice(0, 500) + "...";
	}
	return text;
}

function FileType({ url }) {
    if (url !== undefined) {
        let type = url.file.split(".")[-1];
		let videos = ["mp4"];
		return <video src={url.file} controls preload='metadata'/>;
	}
	return '';
}
export default function Post({ post }) {
	return (
		<div className="post">
			<div className="post_head">
				<div className="post_head_about">
                    <Avatar url={post.author.avatar} />
					<span>
						<Name user={post.author} />
					</span>
				</div>
				<div className="post_head_setting"></div>
			</div>
			<div className="post_body">
				<div className="post_image_div">
                    {post.files.length > 0 && <FileType url={post.files[0]} />}
				</div>
				<div className="post_text_div">
					<p>
						<Truncate text={post.status} />
					</p>
				</div>
			</div>
            <div className="post_footer">
                <button>Like <IoHeart /></button>
                <button>comment <IoChatboxEllipses/></button>
                <button>share <IoShare/></button>
                <button>save <IoSave/></button>
            </div>
		</div>
	);
}
