import {deserializeIntoThreatAssessmentRequestCollectionResponse} from './deserializeIntoThreatAssessmentRequestCollectionResponse';
import {ThreatAssessmentRequestCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThreatAssessmentRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoThreatAssessmentRequestCollectionResponse;
}
