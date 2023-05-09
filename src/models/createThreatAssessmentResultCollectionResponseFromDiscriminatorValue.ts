import {deserializeIntoThreatAssessmentResultCollectionResponse} from './deserializeIntoThreatAssessmentResultCollectionResponse';
import {ThreatAssessmentResultCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThreatAssessmentResultCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoThreatAssessmentResultCollectionResponse;
}
