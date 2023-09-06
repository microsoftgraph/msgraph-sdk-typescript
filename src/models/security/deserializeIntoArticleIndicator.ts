import { type ArticleIndicator } from './articleIndicator';
import { deserializeIntoIndicator } from './deserializeIntoIndicator';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoArticleIndicator(articleIndicator: ArticleIndicator | undefined = {} as ArticleIndicator) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIndicator(articleIndicator),
    }
}
