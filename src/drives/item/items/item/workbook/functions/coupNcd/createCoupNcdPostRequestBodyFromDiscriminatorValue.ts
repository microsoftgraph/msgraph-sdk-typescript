import {CoupNcdPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCoupNcdPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CoupNcdPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CoupNcdPostRequestBody();
}
