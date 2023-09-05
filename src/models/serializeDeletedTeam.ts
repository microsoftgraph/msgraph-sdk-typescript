import { type Channel } from './channel';
import { type DeletedTeam } from './deletedTeam';
import { serializeChannel } from './serializeChannel';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeletedTeam(writer: SerializationWriter, deletedTeam: DeletedTeam | undefined = {} as DeletedTeam) : void {
        serializeEntity(writer, deletedTeam)
        writer.writeCollectionOfObjectValues<Channel>("channels", deletedTeam.channels, serializeChannel);
}
