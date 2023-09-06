import { deserializeIntoThreatAssessmentResultCollectionResponse } from './deserializeIntoThreatAssessmentResultCollectionResponse';
import { type ThreatAssessmentResultCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createThreatAssessmentResultCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoThreatAssessmentResultCollectionResponse;
}
