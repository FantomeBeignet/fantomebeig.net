export const renderer = {
	code(code: string, _infostring: string, _escaped: boolean) {
		return code;
	},
	blockquote(blockquote: string) {
		return blockquote;
	},
	html(html: string, _block: boolean) {
		return html;
	},
	paragraph(text: string) {
		return text;
	},
	heading(text: string, _: number) {
		return text;
	},
	strong(text: string) {
		return text;
	},
	em(text: string) {
		return text;
	},
	codespan(code: string) {
		return code;
	},
	del(text: string) {
		return text;
	},
	link(_href: string, _title: string, text: string) {
		return text;
	},
	text(text: string) {
		return text;
	}
};
