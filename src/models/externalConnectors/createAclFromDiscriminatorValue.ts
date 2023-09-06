import { deserializeIntoAcl } from './deserializeIntoAcl';
import { type Acl } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAclFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAcl;
}
