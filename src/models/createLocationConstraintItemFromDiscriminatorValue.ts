import { deserializeIntoLocationConstraintItem } from './deserializeIntoLocationConstraintItem';
import { type LocationConstraintItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLocationConstraintItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLocationConstraintItem;
}
