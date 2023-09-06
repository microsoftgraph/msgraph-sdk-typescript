import { type Channel } from './channel';
import { createChannelFromDiscriminatorValue } from './createChannelFromDiscriminatorValue';
import { type DeletedTeam } from './deletedTeam';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeChannel } from './serializeChannel';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeletedTeam(deletedTeam: DeletedTeam | undefined = {} as DeletedTeam) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deletedTeam),
        "channels": n => { deletedTeam.channels = n.getCollectionOfObjectValues<Channel>(createChannelFromDiscriminatorValue); },
    }
}
