import { deserializeIntoPreviewPostRequestBody } from './deserializeIntoPreviewPostRequestBody';
import { type PreviewPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPreviewPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPreviewPostRequestBody;
}
