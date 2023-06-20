import {Channel} from './channel';
import {DeletedTeam} from './deletedTeam';
import {serializeChannel} from './serializeChannel';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeletedTeam(deletedTeam: DeletedTeam | undefined = {} as DeletedTeam, writer: SerializationWriter) : void {
        serializeEntity(writer, deletedTeam)
        writer.writeCollectionOfObjectValues<Channel>("channels", deletedTeam.channels, serializeChannel);
}
