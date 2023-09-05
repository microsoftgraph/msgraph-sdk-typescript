import { type AccessReviewScope } from './accessReviewScope';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessReviewScope(writer: SerializationWriter, accessReviewScope: AccessReviewScope | undefined = {} as AccessReviewScope) : void {
        writer.writeStringValue("@odata.type", accessReviewScope.odataType);
        writer.writeAdditionalData(accessReviewScope.additionalData);
}
