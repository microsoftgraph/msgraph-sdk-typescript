import {AccessReviewScope} from './accessReviewScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewScope(writer: SerializationWriter, accessReviewScope: AccessReviewScope | undefined = {} as AccessReviewScope) : void {
        writer.writeStringValue("@odata.type", accessReviewScope.odataType);
        writer.writeAdditionalData(accessReviewScope.additionalData);
}
