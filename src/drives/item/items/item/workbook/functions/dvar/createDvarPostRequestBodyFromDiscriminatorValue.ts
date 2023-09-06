import { deserializeIntoDvarPostRequestBody } from './deserializeIntoDvarPostRequestBody';
import { type DvarPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDvarPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDvarPostRequestBody;
}
