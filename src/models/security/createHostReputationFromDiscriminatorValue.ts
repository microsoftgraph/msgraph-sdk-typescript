import { deserializeIntoHostReputation } from './deserializeIntoHostReputation';
import { type HostReputation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHostReputationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHostReputation;
}
