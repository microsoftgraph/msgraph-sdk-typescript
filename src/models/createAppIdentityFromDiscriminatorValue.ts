import {AppIdentityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppIdentityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppIdentityImpl();
}
