import {CoupDayBsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCoupDayBsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CoupDayBsPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CoupDayBsPostRequestBody();
}
