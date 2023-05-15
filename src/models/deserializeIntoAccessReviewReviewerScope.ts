import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewReviewerScope(accessReviewReviewerScope: AccessReviewReviewerScope | undefined = {} as AccessReviewReviewerScope) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { accessReviewReviewerScope.odataType = n.getStringValue(); },
        "query": n => { accessReviewReviewerScope.query = n.getStringValue(); },
        "queryRoot": n => { accessReviewReviewerScope.queryRoot = n.getStringValue(); },
        "queryType": n => { accessReviewReviewerScope.queryType = n.getStringValue(); },
    }
}
