import {AccessReviewScope} from './accessReviewScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewScope(accessReviewScope: AccessReviewScope | undefined = {} as AccessReviewScope, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", accessReviewScope.odataType);
        writer.writeAdditionalData(accessReviewScope.additionalData);
}
