import {CreateDownloadUrlResponse} from './createDownloadUrlResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateDownloadUrlResponse(writer: SerializationWriter, createDownloadUrlResponse: CreateDownloadUrlResponse | undefined = {} as CreateDownloadUrlResponse) : void {
        writer.writeStringValue("value", createDownloadUrlResponse.value);
        writer.writeAdditionalData(createDownloadUrlResponse.additionalData);
}
