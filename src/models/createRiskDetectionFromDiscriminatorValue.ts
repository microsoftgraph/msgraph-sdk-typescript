import {RiskDetectionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskDetectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : RiskDetectionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RiskDetectionImpl();
}
