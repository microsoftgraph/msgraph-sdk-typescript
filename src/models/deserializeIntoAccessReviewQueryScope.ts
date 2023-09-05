import { type AccessReviewQueryScope } from './accessReviewQueryScope';
import { deserializeIntoAccessReviewScope } from './deserializeIntoAccessReviewScope';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewQueryScope(accessReviewQueryScope: AccessReviewQueryScope | undefined = {} as AccessReviewQueryScope) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewScope(accessReviewQueryScope),
        "query": n => { accessReviewQueryScope.query = n.getStringValue(); },
        "queryRoot": n => { accessReviewQueryScope.queryRoot = n.getStringValue(); },
        "queryType": n => { accessReviewQueryScope.queryType = n.getStringValue(); },
    }
}
