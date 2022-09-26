import {ApplyHoldPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyHoldPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplyHoldPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplyHoldPostRequestBody();
}
