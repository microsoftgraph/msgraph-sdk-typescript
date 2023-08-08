import type {RiskyServicePrincipal} from './riskyServicePrincipal';
import type {RiskyServicePrincipalCollectionResponse} from './riskyServicePrincipalCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRiskyServicePrincipal} from './serializeRiskyServicePrincipal';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRiskyServicePrincipalCollectionResponse(writer: SerializationWriter, riskyServicePrincipalCollectionResponse: RiskyServicePrincipalCollectionResponse | undefined = {} as RiskyServicePrincipalCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, riskyServicePrincipalCollectionResponse)
        writer.writeCollectionOfObjectValues<RiskyServicePrincipal>("value", riskyServicePrincipalCollectionResponse.value, serializeRiskyServicePrincipal);
}
