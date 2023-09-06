import { deserializeIntoTimevaluePostRequestBody } from './deserializeIntoTimevaluePostRequestBody';
import { type TimevaluePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTimevaluePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimevaluePostRequestBody;
}
