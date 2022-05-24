import {RejectPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRejectPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RejectPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RejectPostRequestBodyImpl();
}
