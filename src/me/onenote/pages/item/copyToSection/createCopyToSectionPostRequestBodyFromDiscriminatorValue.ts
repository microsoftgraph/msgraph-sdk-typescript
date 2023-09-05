import { deserializeIntoCopyToSectionPostRequestBody } from './deserializeIntoCopyToSectionPostRequestBody';
import { type CopyToSectionPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCopyToSectionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCopyToSectionPostRequestBody;
}
