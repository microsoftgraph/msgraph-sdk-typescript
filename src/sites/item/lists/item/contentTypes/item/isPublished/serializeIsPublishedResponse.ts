import { type IsPublishedResponse } from './isPublishedResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIsPublishedResponse(writer: SerializationWriter, isPublishedResponse: IsPublishedResponse | undefined = {} as IsPublishedResponse) : void {
        writer.writeBooleanValue("value", isPublishedResponse.value);
        writer.writeAdditionalData(isPublishedResponse.additionalData);
}
