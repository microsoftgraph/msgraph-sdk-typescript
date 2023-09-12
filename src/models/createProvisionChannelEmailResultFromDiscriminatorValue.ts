import { deserializeIntoProvisionChannelEmailResult } from './deserializeIntoProvisionChannelEmailResult';
import { type ProvisionChannelEmailResult } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createProvisionChannelEmailResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProvisionChannelEmailResult;
}
