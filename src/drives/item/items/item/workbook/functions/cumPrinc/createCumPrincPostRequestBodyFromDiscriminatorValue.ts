import { deserializeIntoCumPrincPostRequestBody } from './deserializeIntoCumPrincPostRequestBody';
import { type CumPrincPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCumPrincPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCumPrincPostRequestBody;
}
