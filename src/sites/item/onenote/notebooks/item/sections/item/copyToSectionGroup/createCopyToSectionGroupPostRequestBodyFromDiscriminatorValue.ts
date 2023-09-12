import { deserializeIntoCopyToSectionGroupPostRequestBody } from './deserializeIntoCopyToSectionGroupPostRequestBody';
import { type CopyToSectionGroupPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCopyToSectionGroupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCopyToSectionGroupPostRequestBody;
}
