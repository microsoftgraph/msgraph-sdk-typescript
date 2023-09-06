import { deserializeIntoFactDoublePostRequestBody } from './deserializeIntoFactDoublePostRequestBody';
import { type FactDoublePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFactDoublePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFactDoublePostRequestBody;
}
