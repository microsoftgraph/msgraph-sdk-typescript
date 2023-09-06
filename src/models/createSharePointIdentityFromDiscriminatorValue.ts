import { deserializeIntoSharePointIdentity } from './deserializeIntoSharePointIdentity';
import { type SharePointIdentity } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSharePointIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharePointIdentity;
}
