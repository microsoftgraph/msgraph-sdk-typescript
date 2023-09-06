import { deserializeIntoLocationConstraint } from './deserializeIntoLocationConstraint';
import { type LocationConstraint } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLocationConstraintFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLocationConstraint;
}
