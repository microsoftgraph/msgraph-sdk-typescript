import {ProvisionedIdentityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisionedIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisionedIdentityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisionedIdentityImpl();
}
