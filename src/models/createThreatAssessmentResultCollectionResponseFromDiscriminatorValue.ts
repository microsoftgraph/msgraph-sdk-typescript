import {ThreatAssessmentResultCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThreatAssessmentResultCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ThreatAssessmentResultCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ThreatAssessmentResultCollectionResponseImpl();
}
