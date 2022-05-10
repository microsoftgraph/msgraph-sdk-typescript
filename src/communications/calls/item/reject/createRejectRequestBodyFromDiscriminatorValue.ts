import {RejectRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRejectRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RejectRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RejectRequestBodyImpl();
}
