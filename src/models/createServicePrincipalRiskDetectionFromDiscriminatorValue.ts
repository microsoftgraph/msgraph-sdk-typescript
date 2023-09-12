import { deserializeIntoServicePrincipalRiskDetection } from './deserializeIntoServicePrincipalRiskDetection';
import { type ServicePrincipalRiskDetection } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createServicePrincipalRiskDetectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServicePrincipalRiskDetection;
}
