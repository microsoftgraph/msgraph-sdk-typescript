import { deserializeIntoRiskServicePrincipalActivity } from './deserializeIntoRiskServicePrincipalActivity';
import { type RiskServicePrincipalActivity } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRiskServicePrincipalActivityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRiskServicePrincipalActivity;
}
