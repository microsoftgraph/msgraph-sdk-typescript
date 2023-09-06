import { deserializeIntoTbillEqPostRequestBody } from './deserializeIntoTbillEqPostRequestBody';
import { type TbillEqPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTbillEqPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTbillEqPostRequestBody;
}
