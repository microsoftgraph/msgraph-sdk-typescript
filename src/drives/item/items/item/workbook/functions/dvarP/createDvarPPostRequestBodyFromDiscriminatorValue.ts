import { deserializeIntoDvarPPostRequestBody } from './deserializeIntoDvarPPostRequestBody';
import { type DvarPPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDvarPPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDvarPPostRequestBody;
}
