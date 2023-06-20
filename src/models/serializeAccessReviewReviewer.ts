import {AccessReviewReviewer} from './accessReviewReviewer';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewReviewer(accessReviewReviewer: AccessReviewReviewer | undefined = {} as AccessReviewReviewer, writer: SerializationWriter) : void {
        serializeEntity(writer, accessReviewReviewer)
        writer.writeDateValue("createdDateTime", accessReviewReviewer.createdDateTime);
        writer.writeStringValue("displayName", accessReviewReviewer.displayName);
        writer.writeStringValue("userPrincipalName", accessReviewReviewer.userPrincipalName);
}
