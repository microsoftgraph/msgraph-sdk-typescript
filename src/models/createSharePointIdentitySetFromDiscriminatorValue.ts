import { deserializeIntoSharePointIdentitySet } from './deserializeIntoSharePointIdentitySet';
import { type SharePointIdentitySet } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSharePointIdentitySetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharePointIdentitySet;
}
