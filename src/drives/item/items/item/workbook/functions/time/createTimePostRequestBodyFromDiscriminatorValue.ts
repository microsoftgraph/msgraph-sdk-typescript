import { deserializeIntoTimePostRequestBody } from './deserializeIntoTimePostRequestBody';
import { type TimePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTimePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimePostRequestBody;
}
