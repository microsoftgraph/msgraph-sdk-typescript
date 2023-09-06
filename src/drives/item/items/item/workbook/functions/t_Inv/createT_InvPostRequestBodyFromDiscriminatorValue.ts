import { deserializeIntoT_InvPostRequestBody } from './deserializeIntoT_InvPostRequestBody';
import { type T_InvPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createT_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoT_InvPostRequestBody;
}
