import { deserializeIntoServiceUpdateMessage } from './deserializeIntoServiceUpdateMessage';
import { type ServiceUpdateMessage } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createServiceUpdateMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceUpdateMessage;
}
