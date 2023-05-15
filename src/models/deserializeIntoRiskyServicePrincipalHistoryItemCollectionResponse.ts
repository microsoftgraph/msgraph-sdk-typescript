import {createRiskyServicePrincipalHistoryItemFromDiscriminatorValue} from './createRiskyServicePrincipalHistoryItemFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {RiskyServicePrincipalHistoryItem} from './riskyServicePrincipalHistoryItem';
import {RiskyServicePrincipalHistoryItemCollectionResponse} from './riskyServicePrincipalHistoryItemCollectionResponse';
import {serializeRiskyServicePrincipalHistoryItem} from './serializeRiskyServicePrincipalHistoryItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskyServicePrincipalHistoryItemCollectionResponse(riskyServicePrincipalHistoryItemCollectionResponse: RiskyServicePrincipalHistoryItemCollectionResponse | undefined = {} as RiskyServicePrincipalHistoryItemCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(riskyServicePrincipalHistoryItemCollectionResponse),
        "value": n => { riskyServicePrincipalHistoryItemCollectionResponse.value = n.getCollectionOfObjectValues<RiskyServicePrincipalHistoryItem>(createRiskyServicePrincipalHistoryItemFromDiscriminatorValue); },
    }
}
