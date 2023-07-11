import {serializeEntity} from '../serializeEntity';
import {Article} from './article';
import {ArticleIndicator} from './articleIndicator';
import {FormattedContent} from './formattedContent';
import {serializeArticleIndicator} from './serializeArticleIndicator';
import {serializeFormattedContent} from './serializeFormattedContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeArticle(writer: SerializationWriter, article: Article | undefined = {} as Article) : void {
        serializeEntity(writer, article)
        writer.writeObjectValue<FormattedContent>("body", article.body, serializeFormattedContent);
        writer.writeDateValue("createdDateTime", article.createdDateTime);
        writer.writeStringValue("imageUrl", article.imageUrl);
        writer.writeCollectionOfObjectValues<ArticleIndicator>("indicators", article.indicators, serializeArticleIndicator);
        writer.writeBooleanValue("isFeatured", article.isFeatured);
        writer.writeDateValue("lastUpdatedDateTime", article.lastUpdatedDateTime);
        writer.writeObjectValue<FormattedContent>("summary", article.summary, serializeFormattedContent);
        writer.writeCollectionOfPrimitiveValues<string>("tags", article.tags);
        writer.writeStringValue("title", article.title);
}
