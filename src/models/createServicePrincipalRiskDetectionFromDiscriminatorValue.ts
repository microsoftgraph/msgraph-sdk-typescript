import {ServicePrincipalRiskDetection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServicePrincipalRiskDetectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServicePrincipalRiskDetection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServicePrincipalRiskDetection();
}
