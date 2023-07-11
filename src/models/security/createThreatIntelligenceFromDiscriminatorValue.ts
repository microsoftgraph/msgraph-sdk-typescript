import {deserializeIntoThreatIntelligence} from './deserializeIntoThreatIntelligence';
import {ThreatIntelligence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThreatIntelligenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoThreatIntelligence;
}
