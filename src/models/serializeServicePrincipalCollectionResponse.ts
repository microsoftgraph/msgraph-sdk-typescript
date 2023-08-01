import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeServicePrincipal} from './serializeServicePrincipal';
import type {ServicePrincipal} from './servicePrincipal';
import type {ServicePrincipalCollectionResponse} from './servicePrincipalCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServicePrincipalCollectionResponse(writer: SerializationWriter, servicePrincipalCollectionResponse: ServicePrincipalCollectionResponse | undefined = {} as ServicePrincipalCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, servicePrincipalCollectionResponse)
        writer.writeCollectionOfObjectValues<ServicePrincipal>("value", servicePrincipalCollectionResponse.value, serializeServicePrincipal);
}
