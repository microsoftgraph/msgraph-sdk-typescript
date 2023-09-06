import { deserializeIntoTimeConstraint } from './deserializeIntoTimeConstraint';
import { type TimeConstraint } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTimeConstraintFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimeConstraint;
}
