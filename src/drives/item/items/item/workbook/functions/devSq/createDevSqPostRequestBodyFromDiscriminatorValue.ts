import { deserializeIntoDevSqPostRequestBody } from './deserializeIntoDevSqPostRequestBody';
import { type DevSqPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDevSqPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDevSqPostRequestBody;
}
