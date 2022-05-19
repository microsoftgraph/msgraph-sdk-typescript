import {RejectPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRejectPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RejectPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RejectPostRequestBody();
}
