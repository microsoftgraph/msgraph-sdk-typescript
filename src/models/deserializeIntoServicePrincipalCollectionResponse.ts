import {createServicePrincipalFromDiscriminatorValue} from './createServicePrincipalFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeServicePrincipal} from './serializeServicePrincipal';
import {ServicePrincipal} from './servicePrincipal';
import {ServicePrincipalCollectionResponse} from './servicePrincipalCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServicePrincipalCollectionResponse(servicePrincipalCollectionResponse: ServicePrincipalCollectionResponse | undefined = {} as ServicePrincipalCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(servicePrincipalCollectionResponse),
        "value": n => { servicePrincipalCollectionResponse.value = n.getCollectionOfObjectValues<ServicePrincipal>(createServicePrincipalFromDiscriminatorValue); },
    }
}
