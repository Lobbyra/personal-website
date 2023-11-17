import type { ImageField, RichTextField, TitleField } from "@prismicio/client/*";

class Post {
    illustration: ImageField;
    introtxt: RichTextField;
    richtext: RichTextField;
    title: TitleField;
    constructor(c?: Partial<Post>) {
        this.illustration = c?.illustration || {};
        this.introtxt = c?.introtxt || [];
        this.richtext = c?.richtext || [];
        this.title = c?.title || [];
    }
}
