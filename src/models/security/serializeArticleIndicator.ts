import {ArticleIndicator} from './articleIndicator';
import {serializeIndicator} from './serializeIndicator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeArticleIndicator(writer: SerializationWriter, articleIndicator: ArticleIndicator | undefined = {} as ArticleIndicator) : void {
        serializeIndicator(writer, articleIndicator)
}
