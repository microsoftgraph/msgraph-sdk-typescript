import {AclImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAclFromDiscriminatorValue(parseNode: ParseNode | undefined) : AclImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AclImpl();
}
