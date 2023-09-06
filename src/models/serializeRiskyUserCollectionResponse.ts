import { type RiskyUser } from './riskyUser';
import { type RiskyUserCollectionResponse } from './riskyUserCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeRiskyUser } from './serializeRiskyUser';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRiskyUserCollectionResponse(writer: SerializationWriter, riskyUserCollectionResponse: RiskyUserCollectionResponse | undefined = {} as RiskyUserCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, riskyUserCollectionResponse)
        writer.writeCollectionOfObjectValues<RiskyUser>("value", riskyUserCollectionResponse.value, serializeRiskyUser);
}
