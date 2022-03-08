import {RubricCriterion} from './rubricCriterion';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRubricCriterionFromDiscriminatorValue(parseNode: ParseNode | undefined) : RubricCriterion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RubricCriterion();
}
