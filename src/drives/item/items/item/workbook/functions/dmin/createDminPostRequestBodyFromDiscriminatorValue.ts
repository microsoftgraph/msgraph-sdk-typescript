import { deserializeIntoDminPostRequestBody } from './deserializeIntoDminPostRequestBody';
import { type DminPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDminPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDminPostRequestBody;
}
