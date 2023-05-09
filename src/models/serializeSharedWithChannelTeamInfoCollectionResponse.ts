import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSharedWithChannelTeamInfo} from './serializeSharedWithChannelTeamInfo';
import {SharedWithChannelTeamInfo} from './sharedWithChannelTeamInfo';
import {SharedWithChannelTeamInfoCollectionResponse} from './sharedWithChannelTeamInfoCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharedWithChannelTeamInfoCollectionResponse(writer: SerializationWriter, sharedWithChannelTeamInfoCollectionResponse: SharedWithChannelTeamInfoCollectionResponse | undefined = {} as SharedWithChannelTeamInfoCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sharedWithChannelTeamInfoCollectionResponse)
        writer.writeCollectionOfObjectValues<SharedWithChannelTeamInfo>("value", sharedWithChannelTeamInfoCollectionResponse.value, serializeSharedWithChannelTeamInfo);
}
