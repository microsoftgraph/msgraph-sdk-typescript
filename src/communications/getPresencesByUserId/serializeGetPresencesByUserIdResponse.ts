import { type Presence } from '../../models/presence';
import { serializeBaseCollectionPaginationCountResponse } from '../../models/serializeBaseCollectionPaginationCountResponse';
import { serializePresence } from '../../models/serializePresence';
import { type GetPresencesByUserIdResponse } from './getPresencesByUserIdResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetPresencesByUserIdResponse(writer: SerializationWriter, getPresencesByUserIdResponse: GetPresencesByUserIdResponse | undefined = {} as GetPresencesByUserIdResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getPresencesByUserIdResponse)
        writer.writeCollectionOfObjectValues<Presence>("value", getPresencesByUserIdResponse.value, serializePresence);
}
