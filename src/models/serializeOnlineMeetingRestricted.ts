import {OnlineMeetingContentSharingDisabledReason} from './onlineMeetingContentSharingDisabledReason';
import {OnlineMeetingRestricted} from './onlineMeetingRestricted';
import {OnlineMeetingVideoDisabledReason} from './onlineMeetingVideoDisabledReason';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnlineMeetingRestricted(writer: SerializationWriter, onlineMeetingRestricted: OnlineMeetingRestricted | undefined = {} as OnlineMeetingRestricted) : void {
        writer.writeEnumValue<OnlineMeetingContentSharingDisabledReason>("contentSharingDisabled", onlineMeetingRestricted.contentSharingDisabled);
        writer.writeStringValue("@odata.type", onlineMeetingRestricted.odataType);
        writer.writeEnumValue<OnlineMeetingVideoDisabledReason>("videoDisabled", onlineMeetingRestricted.videoDisabled);
        writer.writeAdditionalData(onlineMeetingRestricted.additionalData);
}
