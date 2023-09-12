import { deserializeIntoTbillYieldPostRequestBody } from './deserializeIntoTbillYieldPostRequestBody';
import { type TbillYieldPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTbillYieldPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTbillYieldPostRequestBody;
}
