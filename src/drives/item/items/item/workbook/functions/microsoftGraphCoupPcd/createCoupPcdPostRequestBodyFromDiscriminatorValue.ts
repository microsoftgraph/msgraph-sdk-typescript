import {CoupPcdPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCoupPcdPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CoupPcdPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CoupPcdPostRequestBody();
}
