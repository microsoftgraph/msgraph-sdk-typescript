import {createRiskyServicePrincipalHistoryItemFromDiscriminatorValue} from './createRiskyServicePrincipalHistoryItemFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {RiskyServicePrincipalHistoryItem} from './riskyServicePrincipalHistoryItem';
import type {RiskyServicePrincipalHistoryItemCollectionResponse} from './riskyServicePrincipalHistoryItemCollectionResponse';
import {serializeRiskyServicePrincipalHistoryItem} from './serializeRiskyServicePrincipalHistoryItem';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskyServicePrincipalHistoryItemCollectionResponse(riskyServicePrincipalHistoryItemCollectionResponse: RiskyServicePrincipalHistoryItemCollectionResponse | undefined = {} as RiskyServicePrincipalHistoryItemCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(riskyServicePrincipalHistoryItemCollectionResponse),
        "value": n => { riskyServicePrincipalHistoryItemCollectionResponse.value = n.getCollectionOfObjectValues<RiskyServicePrincipalHistoryItem>(createRiskyServicePrincipalHistoryItemFromDiscriminatorValue); },
    }
}
