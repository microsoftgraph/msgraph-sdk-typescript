import {SharedWithChannelTeamInfoCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedWithChannelTeamInfoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharedWithChannelTeamInfoCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharedWithChannelTeamInfoCollectionResponse();
}
