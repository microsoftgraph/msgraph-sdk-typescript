import { deserializeIntoCreateDownloadUrlResponse } from './deserializeIntoCreateDownloadUrlResponse';
import { type CreateDownloadUrlResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCreateDownloadUrlResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCreateDownloadUrlResponse;
}
