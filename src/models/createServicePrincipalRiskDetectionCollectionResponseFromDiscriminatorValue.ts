import { deserializeIntoServicePrincipalRiskDetectionCollectionResponse } from './deserializeIntoServicePrincipalRiskDetectionCollectionResponse';
import { type ServicePrincipalRiskDetectionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createServicePrincipalRiskDetectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServicePrincipalRiskDetectionCollectionResponse;
}
