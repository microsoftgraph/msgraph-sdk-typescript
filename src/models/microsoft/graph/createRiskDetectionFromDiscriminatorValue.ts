import {RiskDetection} from './riskDetection';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskDetectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : RiskDetection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RiskDetection();
}
