import {Channel} from './channel';
import {createChannelFromDiscriminatorValue} from './createChannelFromDiscriminatorValue';
import {DeletedTeam} from './deletedTeam';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeChannel} from './serializeChannel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeletedTeam(deletedTeam: DeletedTeam | undefined = {} as DeletedTeam) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deletedTeam),
        "channels": n => { deletedTeam.channels = n.getCollectionOfObjectValues<Channel>(createChannelFromDiscriminatorValue); },
    }
}
