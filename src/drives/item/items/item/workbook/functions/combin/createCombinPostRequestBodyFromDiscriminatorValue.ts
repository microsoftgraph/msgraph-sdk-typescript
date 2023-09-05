import { deserializeIntoCombinPostRequestBody } from './deserializeIntoCombinPostRequestBody';
import { type CombinPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCombinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCombinPostRequestBody;
}
