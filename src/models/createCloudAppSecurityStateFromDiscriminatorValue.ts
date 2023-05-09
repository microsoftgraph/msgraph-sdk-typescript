import {deserializeIntoCloudAppSecurityState} from './deserializeIntoCloudAppSecurityState';
import {CloudAppSecurityState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudAppSecurityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCloudAppSecurityState;
}
