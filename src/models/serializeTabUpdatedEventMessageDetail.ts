import {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TabUpdatedEventMessageDetail} from './tabUpdatedEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTabUpdatedEventMessageDetail(writer: SerializationWriter, tabUpdatedEventMessageDetail: TabUpdatedEventMessageDetail | undefined = {} as TabUpdatedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, tabUpdatedEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", tabUpdatedEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeStringValue("tabId", tabUpdatedEventMessageDetail.tabId);
}
