import {EducationRubricOutcomeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationRubricOutcomeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationRubricOutcomeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationRubricOutcomeCollectionResponse();
}
