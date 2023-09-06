import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeServicePrincipalRiskDetection } from './serializeServicePrincipalRiskDetection';
import { type ServicePrincipalRiskDetection } from './servicePrincipalRiskDetection';
import { type ServicePrincipalRiskDetectionCollectionResponse } from './servicePrincipalRiskDetectionCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeServicePrincipalRiskDetectionCollectionResponse(writer: SerializationWriter, servicePrincipalRiskDetectionCollectionResponse: ServicePrincipalRiskDetectionCollectionResponse | undefined = {} as ServicePrincipalRiskDetectionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, servicePrincipalRiskDetectionCollectionResponse)
        writer.writeCollectionOfObjectValues<ServicePrincipalRiskDetection>("value", servicePrincipalRiskDetectionCollectionResponse.value, serializeServicePrincipalRiskDetection);
}
