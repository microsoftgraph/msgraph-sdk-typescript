import {EducationPointsOutcome} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationPointsOutcomeFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationPointsOutcome {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationPointsOutcome();
}
