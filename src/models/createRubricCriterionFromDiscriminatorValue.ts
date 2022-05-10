import {RubricCriterionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRubricCriterionFromDiscriminatorValue(parseNode: ParseNode | undefined) : RubricCriterionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RubricCriterionImpl();
}
