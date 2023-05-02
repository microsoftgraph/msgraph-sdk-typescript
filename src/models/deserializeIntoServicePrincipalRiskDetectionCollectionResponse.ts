import {createServicePrincipalRiskDetectionFromDiscriminatorValue} from './createServicePrincipalRiskDetectionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeServicePrincipalRiskDetection} from './serializeServicePrincipalRiskDetection';
import {ServicePrincipalRiskDetection} from './servicePrincipalRiskDetection';
import {ServicePrincipalRiskDetectionCollectionResponse} from './servicePrincipalRiskDetectionCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServicePrincipalRiskDetectionCollectionResponse(servicePrincipalRiskDetectionCollectionResponse: ServicePrincipalRiskDetectionCollectionResponse | undefined = {} as ServicePrincipalRiskDetectionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(servicePrincipalRiskDetectionCollectionResponse),
        "value": n => { servicePrincipalRiskDetectionCollectionResponse.value = n.getCollectionOfObjectValues<ServicePrincipalRiskDetection>(createServicePrincipalRiskDetectionFromDiscriminatorValue); },
    }
}
