import {CloudAppSecuritySessionControlImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudAppSecuritySessionControlFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudAppSecuritySessionControlImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudAppSecuritySessionControlImpl();
}
