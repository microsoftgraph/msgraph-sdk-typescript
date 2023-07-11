import {deserializeIntoCreateDownloadUrlResponse} from './deserializeIntoCreateDownloadUrlResponse';
import {CreateDownloadUrlResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateDownloadUrlResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCreateDownloadUrlResponse;
}
