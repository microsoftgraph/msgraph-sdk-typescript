import {TbillEqPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTbillEqPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TbillEqPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TbillEqPostRequestBody();
}
