import {deserializeIntoLocationConstraint} from './deserializeIntoLocationConstraint';
import {LocationConstraint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocationConstraintFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLocationConstraint;
}
