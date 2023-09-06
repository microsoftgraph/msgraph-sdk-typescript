import { deserializeIntoCloudAppSecurityState } from './deserializeIntoCloudAppSecurityState';
import { type CloudAppSecurityState } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCloudAppSecurityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCloudAppSecurityState;
}
