import {ServicePrincipalRiskDetectionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServicePrincipalRiskDetectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServicePrincipalRiskDetectionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServicePrincipalRiskDetectionCollectionResponse();
}
