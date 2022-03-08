import {CloudAppSecuritySessionControl} from './cloudAppSecuritySessionControl';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudAppSecuritySessionControlFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudAppSecuritySessionControl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudAppSecuritySessionControl();
}
