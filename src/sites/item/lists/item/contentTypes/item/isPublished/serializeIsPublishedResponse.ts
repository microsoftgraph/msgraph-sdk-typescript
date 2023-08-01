import type {IsPublishedResponse} from './isPublishedResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIsPublishedResponse(writer: SerializationWriter, isPublishedResponse: IsPublishedResponse | undefined = {} as IsPublishedResponse) : void {
        writer.writeBooleanValue("value", isPublishedResponse.value);
        writer.writeAdditionalData(isPublishedResponse.additionalData);
}
