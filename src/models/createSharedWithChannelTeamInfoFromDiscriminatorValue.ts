import { deserializeIntoSharedWithChannelTeamInfo } from './deserializeIntoSharedWithChannelTeamInfo';
import { type SharedWithChannelTeamInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSharedWithChannelTeamInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharedWithChannelTeamInfo;
}
