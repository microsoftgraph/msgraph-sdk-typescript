import {IsPublishedResponse} from './isPublishedResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIsPublishedResponse(isPublishedResponse: IsPublishedResponse | undefined = {} as IsPublishedResponse, writer: SerializationWriter) : void {
        writer.writeBooleanValue("value", isPublishedResponse.value);
        writer.writeAdditionalData(isPublishedResponse.additionalData);
}
