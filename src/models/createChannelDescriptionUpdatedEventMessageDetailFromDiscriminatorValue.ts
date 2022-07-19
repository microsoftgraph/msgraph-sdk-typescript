import {ChannelDescriptionUpdatedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelDescriptionUpdatedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChannelDescriptionUpdatedEventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChannelDescriptionUpdatedEventMessageDetail();
}
