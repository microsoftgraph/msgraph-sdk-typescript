import { deserializeIntoThreatAssessmentRequestCollectionResponse } from './deserializeIntoThreatAssessmentRequestCollectionResponse';
import { type ThreatAssessmentRequestCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createThreatAssessmentRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoThreatAssessmentRequestCollectionResponse;
}
