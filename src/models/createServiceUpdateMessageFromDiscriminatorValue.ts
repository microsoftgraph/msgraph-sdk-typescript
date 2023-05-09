import {deserializeIntoServiceUpdateMessage} from './deserializeIntoServiceUpdateMessage';
import {ServiceUpdateMessage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceUpdateMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceUpdateMessage;
}
