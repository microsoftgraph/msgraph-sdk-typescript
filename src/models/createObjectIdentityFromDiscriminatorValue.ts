import {deserializeIntoObjectIdentity} from './deserializeIntoObjectIdentity';
import {ObjectIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createObjectIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoObjectIdentity;
}
