import {TimeConstraint} from './timeConstraint';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeConstraintFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeConstraint {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeConstraint();
}
