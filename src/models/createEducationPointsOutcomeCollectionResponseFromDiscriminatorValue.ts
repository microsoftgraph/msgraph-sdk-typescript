import {EducationPointsOutcomeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationPointsOutcomeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationPointsOutcomeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationPointsOutcomeCollectionResponse();
}
