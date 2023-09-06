import { type CreateDownloadUrlResponse } from './createDownloadUrlResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateDownloadUrlResponse(createDownloadUrlResponse: CreateDownloadUrlResponse | undefined = {} as CreateDownloadUrlResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { createDownloadUrlResponse.value = n.getStringValue(); },
    }
}
