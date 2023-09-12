import { deserializeIntoRiskUserActivity } from './deserializeIntoRiskUserActivity';
import { type RiskUserActivity } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRiskUserActivityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRiskUserActivity;
}
