import { deserializeIntoChannelDescriptionUpdatedEventMessageDetail } from './deserializeIntoChannelDescriptionUpdatedEventMessageDetail';
import { type ChannelDescriptionUpdatedEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChannelDescriptionUpdatedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChannelDescriptionUpdatedEventMessageDetail;
}
