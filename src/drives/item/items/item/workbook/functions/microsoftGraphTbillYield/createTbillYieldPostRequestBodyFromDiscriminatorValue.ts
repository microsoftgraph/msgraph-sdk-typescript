import {TbillYieldPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTbillYieldPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TbillYieldPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TbillYieldPostRequestBody();
}
