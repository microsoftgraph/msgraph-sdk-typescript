import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { type Article } from './article';
import { type ArticleIndicator } from './articleIndicator';
import { createArticleIndicatorFromDiscriminatorValue } from './createArticleIndicatorFromDiscriminatorValue';
import { createFormattedContentFromDiscriminatorValue } from './createFormattedContentFromDiscriminatorValue';
import { type FormattedContent } from './formattedContent';
import { serializeArticleIndicator } from './serializeArticleIndicator';
import { serializeFormattedContent } from './serializeFormattedContent';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoArticle(article: Article | undefined = {} as Article) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(article),
        "body": n => { article.body = n.getObjectValue<FormattedContent>(createFormattedContentFromDiscriminatorValue); },
        "createdDateTime": n => { article.createdDateTime = n.getDateValue(); },
        "imageUrl": n => { article.imageUrl = n.getStringValue(); },
        "indicators": n => { article.indicators = n.getCollectionOfObjectValues<ArticleIndicator>(createArticleIndicatorFromDiscriminatorValue); },
        "isFeatured": n => { article.isFeatured = n.getBooleanValue(); },
        "lastUpdatedDateTime": n => { article.lastUpdatedDateTime = n.getDateValue(); },
        "summary": n => { article.summary = n.getObjectValue<FormattedContent>(createFormattedContentFromDiscriminatorValue); },
        "tags": n => { article.tags = n.getCollectionOfPrimitiveValues<string>(); },
        "title": n => { article.title = n.getStringValue(); },
    }
}
