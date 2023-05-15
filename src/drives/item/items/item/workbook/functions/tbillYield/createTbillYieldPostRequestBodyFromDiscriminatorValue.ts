import {deserializeIntoTbillYieldPostRequestBody} from './deserializeIntoTbillYieldPostRequestBody';
import {TbillYieldPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTbillYieldPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTbillYieldPostRequestBody;
}
