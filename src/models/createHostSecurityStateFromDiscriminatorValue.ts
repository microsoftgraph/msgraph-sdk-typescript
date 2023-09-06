import { deserializeIntoHostSecurityState } from './deserializeIntoHostSecurityState';
import { type HostSecurityState } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHostSecurityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHostSecurityState;
}
