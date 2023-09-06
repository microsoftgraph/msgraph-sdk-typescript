import { deserializeIntoCschPostRequestBody } from './deserializeIntoCschPostRequestBody';
import { type CschPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCschPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCschPostRequestBody;
}
