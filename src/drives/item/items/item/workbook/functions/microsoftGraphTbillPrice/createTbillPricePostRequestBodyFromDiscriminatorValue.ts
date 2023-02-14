import {TbillPricePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTbillPricePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TbillPricePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TbillPricePostRequestBody();
}
