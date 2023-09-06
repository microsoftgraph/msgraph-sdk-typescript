import { type CreateDownloadUrlResponse } from './createDownloadUrlResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCreateDownloadUrlResponse(writer: SerializationWriter, createDownloadUrlResponse: CreateDownloadUrlResponse | undefined = {} as CreateDownloadUrlResponse) : void {
        writer.writeStringValue("value", createDownloadUrlResponse.value);
        writer.writeAdditionalData(createDownloadUrlResponse.additionalData);
}
