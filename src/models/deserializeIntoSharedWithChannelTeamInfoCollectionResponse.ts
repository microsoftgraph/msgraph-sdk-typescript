import {createSharedWithChannelTeamInfoFromDiscriminatorValue} from './createSharedWithChannelTeamInfoFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeSharedWithChannelTeamInfo} from './serializeSharedWithChannelTeamInfo';
import type {SharedWithChannelTeamInfo} from './sharedWithChannelTeamInfo';
import type {SharedWithChannelTeamInfoCollectionResponse} from './sharedWithChannelTeamInfoCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedWithChannelTeamInfoCollectionResponse(sharedWithChannelTeamInfoCollectionResponse: SharedWithChannelTeamInfoCollectionResponse | undefined = {} as SharedWithChannelTeamInfoCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(sharedWithChannelTeamInfoCollectionResponse),
        "value": n => { sharedWithChannelTeamInfoCollectionResponse.value = n.getCollectionOfObjectValues<SharedWithChannelTeamInfo>(createSharedWithChannelTeamInfoFromDiscriminatorValue); },
    }
}
