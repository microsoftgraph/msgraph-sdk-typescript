import {deserializeIntoLocationConstraintItem} from './deserializeIntoLocationConstraintItem';
import {LocationConstraintItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocationConstraintItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLocationConstraintItem;
}
