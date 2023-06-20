import {Presence} from '../../models/presence';
import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {serializePresence} from '../../models/serializePresence';
import {GetPresencesByUserIdResponse} from './getPresencesByUserIdResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetPresencesByUserIdResponse(getPresencesByUserIdResponse: GetPresencesByUserIdResponse | undefined = {} as GetPresencesByUserIdResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getPresencesByUserIdResponse)
        writer.writeCollectionOfObjectValues<Presence>("value", getPresencesByUserIdResponse.value, serializePresence);
}
