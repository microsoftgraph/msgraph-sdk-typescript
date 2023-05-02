import {deserializeIntoTargetApplicationOwners} from './deserializeIntoTargetApplicationOwners';
import {TargetApplicationOwners} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetApplicationOwnersFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTargetApplicationOwners;
}
