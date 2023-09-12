import { deserializeIntoTargetApplicationOwners } from './deserializeIntoTargetApplicationOwners';
import { type TargetApplicationOwners } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTargetApplicationOwnersFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTargetApplicationOwners;
}
