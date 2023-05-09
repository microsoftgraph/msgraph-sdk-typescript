import {Channel} from './channel';
import {DeletedTeam} from './deletedTeam';
import {serializeChannel} from './serializeChannel';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeletedTeam(writer: SerializationWriter, deletedTeam: DeletedTeam | undefined = {} as DeletedTeam) : void {
        serializeEntity(writer, deletedTeam)
        writer.writeCollectionOfObjectValues<Channel>("channels", deletedTeam.channels, serializeChannel);
}
