import {ChannelUnsetAsFavoriteByDefaultEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelUnsetAsFavoriteByDefaultEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChannelUnsetAsFavoriteByDefaultEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChannelUnsetAsFavoriteByDefaultEventMessageDetailImpl();
}
