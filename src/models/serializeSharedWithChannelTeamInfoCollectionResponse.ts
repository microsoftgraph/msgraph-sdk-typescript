import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSharedWithChannelTeamInfo} from './serializeSharedWithChannelTeamInfo';
import type {SharedWithChannelTeamInfo} from './sharedWithChannelTeamInfo';
import type {SharedWithChannelTeamInfoCollectionResponse} from './sharedWithChannelTeamInfoCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharedWithChannelTeamInfoCollectionResponse(writer: SerializationWriter, sharedWithChannelTeamInfoCollectionResponse: SharedWithChannelTeamInfoCollectionResponse | undefined = {} as SharedWithChannelTeamInfoCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sharedWithChannelTeamInfoCollectionResponse)
        writer.writeCollectionOfObjectValues<SharedWithChannelTeamInfo>("value", sharedWithChannelTeamInfoCollectionResponse.value, serializeSharedWithChannelTeamInfo);
}
