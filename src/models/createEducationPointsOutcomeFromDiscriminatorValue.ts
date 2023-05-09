import {deserializeIntoEducationPointsOutcome} from './deserializeIntoEducationPointsOutcome';
import {EducationPointsOutcome} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationPointsOutcomeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationPointsOutcome;
}
