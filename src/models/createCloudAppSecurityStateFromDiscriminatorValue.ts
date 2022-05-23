import {CloudAppSecurityStateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudAppSecurityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudAppSecurityStateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudAppSecurityStateImpl();
}
