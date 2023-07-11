import {ArticleIndicator} from './articleIndicator';
import {deserializeIntoIndicator} from './deserializeIntoIndicator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoArticleIndicator(articleIndicator: ArticleIndicator | undefined = {} as ArticleIndicator) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIndicator(articleIndicator),
    }
}
