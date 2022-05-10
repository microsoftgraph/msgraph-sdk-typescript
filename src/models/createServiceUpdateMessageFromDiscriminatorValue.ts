import {ServiceUpdateMessageImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceUpdateMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceUpdateMessageImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceUpdateMessageImpl();
}
