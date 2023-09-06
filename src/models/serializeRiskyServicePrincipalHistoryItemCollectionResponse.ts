import { type RiskyServicePrincipalHistoryItem } from './riskyServicePrincipalHistoryItem';
import { type RiskyServicePrincipalHistoryItemCollectionResponse } from './riskyServicePrincipalHistoryItemCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeRiskyServicePrincipalHistoryItem } from './serializeRiskyServicePrincipalHistoryItem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRiskyServicePrincipalHistoryItemCollectionResponse(writer: SerializationWriter, riskyServicePrincipalHistoryItemCollectionResponse: RiskyServicePrincipalHistoryItemCollectionResponse | undefined = {} as RiskyServicePrincipalHistoryItemCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, riskyServicePrincipalHistoryItemCollectionResponse)
        writer.writeCollectionOfObjectValues<RiskyServicePrincipalHistoryItem>("value", riskyServicePrincipalHistoryItemCollectionResponse.value, serializeRiskyServicePrincipalHistoryItem);
}
