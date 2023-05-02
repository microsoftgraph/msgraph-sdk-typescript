import {RiskyServicePrincipal} from './riskyServicePrincipal';
import {RiskyServicePrincipalCollectionResponse} from './riskyServicePrincipalCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRiskyServicePrincipal} from './serializeRiskyServicePrincipal';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRiskyServicePrincipalCollectionResponse(writer: SerializationWriter, riskyServicePrincipalCollectionResponse: RiskyServicePrincipalCollectionResponse | undefined = {} as RiskyServicePrincipalCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, riskyServicePrincipalCollectionResponse)
        writer.writeCollectionOfObjectValues<RiskyServicePrincipal>("value", riskyServicePrincipalCollectionResponse.value, serializeRiskyServicePrincipal);
}
