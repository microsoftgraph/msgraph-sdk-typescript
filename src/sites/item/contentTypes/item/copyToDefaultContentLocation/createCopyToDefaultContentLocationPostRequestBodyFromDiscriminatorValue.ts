import { deserializeIntoCopyToDefaultContentLocationPostRequestBody } from './deserializeIntoCopyToDefaultContentLocationPostRequestBody';
import { type CopyToDefaultContentLocationPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCopyToDefaultContentLocationPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCopyToDefaultContentLocationPostRequestBody;
}
