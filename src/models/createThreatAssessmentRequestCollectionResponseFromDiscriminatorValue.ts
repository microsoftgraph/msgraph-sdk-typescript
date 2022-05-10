import {ThreatAssessmentRequestCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThreatAssessmentRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ThreatAssessmentRequestCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ThreatAssessmentRequestCollectionResponseImpl();
}
