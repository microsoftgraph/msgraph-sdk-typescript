import {RiskyUser} from './riskyUser';
import {RiskyUserCollectionResponse} from './riskyUserCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRiskyUser} from './serializeRiskyUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRiskyUserCollectionResponse(writer: SerializationWriter, riskyUserCollectionResponse: RiskyUserCollectionResponse | undefined = {} as RiskyUserCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, riskyUserCollectionResponse)
        writer.writeCollectionOfObjectValues<RiskyUser>("value", riskyUserCollectionResponse.value, serializeRiskyUser);
}
