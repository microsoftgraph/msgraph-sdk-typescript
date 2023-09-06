import { deserializeIntoUnicharPostRequestBody } from './deserializeIntoUnicharPostRequestBody';
import { type UnicharPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnicharPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnicharPostRequestBody;
}
