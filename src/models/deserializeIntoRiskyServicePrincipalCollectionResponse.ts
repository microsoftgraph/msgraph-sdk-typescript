import {createRiskyServicePrincipalFromDiscriminatorValue} from './createRiskyServicePrincipalFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {RiskyServicePrincipal} from './riskyServicePrincipal';
import {RiskyServicePrincipalCollectionResponse} from './riskyServicePrincipalCollectionResponse';
import {serializeRiskyServicePrincipal} from './serializeRiskyServicePrincipal';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskyServicePrincipalCollectionResponse(riskyServicePrincipalCollectionResponse: RiskyServicePrincipalCollectionResponse | undefined = {} as RiskyServicePrincipalCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(riskyServicePrincipalCollectionResponse),
        "value": n => { riskyServicePrincipalCollectionResponse.value = n.getCollectionOfObjectValues<RiskyServicePrincipal>(createRiskyServicePrincipalFromDiscriminatorValue); },
    }
}
