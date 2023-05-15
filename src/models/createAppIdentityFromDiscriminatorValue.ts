import {deserializeIntoAppIdentity} from './deserializeIntoAppIdentity';
import {AppIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppIdentity;
}
