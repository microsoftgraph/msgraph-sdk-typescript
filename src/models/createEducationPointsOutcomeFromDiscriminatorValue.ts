import {EducationPointsOutcomeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationPointsOutcomeFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationPointsOutcomeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationPointsOutcomeImpl();
}
