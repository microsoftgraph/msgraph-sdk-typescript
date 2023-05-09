import {deserializeIntoAcl} from './deserializeIntoAcl';
import {Acl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAclFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAcl;
}
