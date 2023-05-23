import {OnlineMeetingContentSharingDisabledReason} from './onlineMeetingContentSharingDisabledReason';
import {OnlineMeetingRestricted} from './onlineMeetingRestricted';
import {OnlineMeetingVideoDisabledReason} from './onlineMeetingVideoDisabledReason';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnlineMeetingRestricted(onlineMeetingRestricted: OnlineMeetingRestricted | undefined = {} as OnlineMeetingRestricted) : Record<string, (node: ParseNode) => void> {
    return {
        "contentSharingDisabled": n => { onlineMeetingRestricted.contentSharingDisabled = n.getEnumValue<OnlineMeetingContentSharingDisabledReason>(OnlineMeetingContentSharingDisabledReason); },
        "@odata.type": n => { onlineMeetingRestricted.odataType = n.getStringValue(); },
        "videoDisabled": n => { onlineMeetingRestricted.videoDisabled = n.getEnumValue<OnlineMeetingVideoDisabledReason>(OnlineMeetingVideoDisabledReason); },
    }
}
