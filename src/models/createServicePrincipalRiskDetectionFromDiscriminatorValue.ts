import {deserializeIntoServicePrincipalRiskDetection} from './deserializeIntoServicePrincipalRiskDetection';
import {ServicePrincipalRiskDetection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServicePrincipalRiskDetectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServicePrincipalRiskDetection;
}
