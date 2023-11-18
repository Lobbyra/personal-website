import type { Query } from "@prismicio/client/*";
import type { PrismicPlugin } from "@prismicio/vue";

export async function fetchPosts(
    prismic: PrismicPlugin,
    search: string,
    page: number,
) : Promise<Query> {
    return (
        await prismic.client.get(
            {
                filters: [
                    prismic.filter.fulltext('document', search),
                ],
                page: page,
                pageSize: 4
            }
        )
    )
}
