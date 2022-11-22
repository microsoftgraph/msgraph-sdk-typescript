import {RubricCriterionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRubricCriterionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RubricCriterionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RubricCriterionCollectionResponse();
}
