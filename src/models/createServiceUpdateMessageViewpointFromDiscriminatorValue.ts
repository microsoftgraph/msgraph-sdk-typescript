import {ServiceUpdateMessageViewpointImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceUpdateMessageViewpointFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceUpdateMessageViewpointImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceUpdateMessageViewpointImpl();
}
