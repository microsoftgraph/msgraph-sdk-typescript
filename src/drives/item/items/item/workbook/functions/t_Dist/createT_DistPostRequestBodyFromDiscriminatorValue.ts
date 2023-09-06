import { deserializeIntoT_DistPostRequestBody } from './deserializeIntoT_DistPostRequestBody';
import { type T_DistPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createT_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoT_DistPostRequestBody;
}
