import {IdentityProtectionRootImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityProtectionRootFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityProtectionRootImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityProtectionRootImpl();
}
