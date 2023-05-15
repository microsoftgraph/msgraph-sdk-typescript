import {deserializeIntoCloudAppSecuritySessionControl} from './deserializeIntoCloudAppSecuritySessionControl';
import {CloudAppSecuritySessionControl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudAppSecuritySessionControlFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCloudAppSecuritySessionControl;
}
