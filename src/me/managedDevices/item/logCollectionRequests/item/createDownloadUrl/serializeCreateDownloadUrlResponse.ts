import type {CreateDownloadUrlResponse} from './createDownloadUrlResponse';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateDownloadUrlResponse(writer: SerializationWriter, createDownloadUrlResponse: CreateDownloadUrlResponse | undefined = {} as CreateDownloadUrlResponse) : void {
        writer.writeStringValue("value", createDownloadUrlResponse.value);
        writer.writeAdditionalData(createDownloadUrlResponse.additionalData);
}
