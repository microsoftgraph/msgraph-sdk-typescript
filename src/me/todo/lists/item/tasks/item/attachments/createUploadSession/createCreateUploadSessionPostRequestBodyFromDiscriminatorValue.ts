import { deserializeIntoCreateUploadSessionPostRequestBody } from './deserializeIntoCreateUploadSessionPostRequestBody';
import { type CreateUploadSessionPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCreateUploadSessionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCreateUploadSessionPostRequestBody;
}
