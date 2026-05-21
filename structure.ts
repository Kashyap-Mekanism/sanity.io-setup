import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // ALL POSTS
      S.documentTypeListItem('post').title('All Posts'),

      // POSTS BY CATEGORY
      S.listItem()
        .title('Posts by Category')
        .child(
          S.documentTypeList('category')
            .title('Categories')
            .child((categoryId) =>
              S.documentList()
                .title('Posts')
                .filter('_type == "post" && $categoryId in categories[]._ref')
                .params({categoryId}),
            ),
        ),

      S.divider(),

      // CATEGORIES
      S.documentTypeListItem('category').title('Categories'),
    ])
