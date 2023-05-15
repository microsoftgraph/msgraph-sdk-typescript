import {AccessReviewReviewer} from './accessReviewReviewer';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewReviewer(accessReviewReviewer: AccessReviewReviewer | undefined = {} as AccessReviewReviewer) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessReviewReviewer),
        "createdDateTime": n => { accessReviewReviewer.createdDateTime = n.getDateValue(); },
        "displayName": n => { accessReviewReviewer.displayName = n.getStringValue(); },
        "userPrincipalName": n => { accessReviewReviewer.userPrincipalName = n.getStringValue(); },
    }
}
