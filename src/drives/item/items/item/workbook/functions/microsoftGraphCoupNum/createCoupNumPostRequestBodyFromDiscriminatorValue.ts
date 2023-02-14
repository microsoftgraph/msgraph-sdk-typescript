import {CoupNumPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCoupNumPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CoupNumPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CoupNumPostRequestBody();
}
