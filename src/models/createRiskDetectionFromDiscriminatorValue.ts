import { deserializeIntoRiskDetection } from './deserializeIntoRiskDetection';
import { type RiskDetection } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRiskDetectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRiskDetection;
}
