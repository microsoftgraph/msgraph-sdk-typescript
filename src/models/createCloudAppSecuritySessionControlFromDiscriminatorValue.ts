import { deserializeIntoCloudAppSecuritySessionControl } from './deserializeIntoCloudAppSecuritySessionControl';
import { type CloudAppSecuritySessionControl } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCloudAppSecuritySessionControlFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCloudAppSecuritySessionControl;
}
