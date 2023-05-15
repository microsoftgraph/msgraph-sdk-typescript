import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeServicePrincipalRiskDetection} from './serializeServicePrincipalRiskDetection';
import {ServicePrincipalRiskDetection} from './servicePrincipalRiskDetection';
import {ServicePrincipalRiskDetectionCollectionResponse} from './servicePrincipalRiskDetectionCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServicePrincipalRiskDetectionCollectionResponse(writer: SerializationWriter, servicePrincipalRiskDetectionCollectionResponse: ServicePrincipalRiskDetectionCollectionResponse | undefined = {} as ServicePrincipalRiskDetectionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, servicePrincipalRiskDetectionCollectionResponse)
        writer.writeCollectionOfObjectValues<ServicePrincipalRiskDetection>("value", servicePrincipalRiskDetectionCollectionResponse.value, serializeServicePrincipalRiskDetection);
}
