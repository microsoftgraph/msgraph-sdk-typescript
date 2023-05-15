import {deserializeIntoRubricCriterion} from './deserializeIntoRubricCriterion';
import {RubricCriterion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRubricCriterionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRubricCriterion;
}
