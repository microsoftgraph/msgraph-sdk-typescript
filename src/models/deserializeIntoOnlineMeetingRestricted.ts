import { OnlineMeetingContentSharingDisabledReason } from './onlineMeetingContentSharingDisabledReason';
import { type OnlineMeetingRestricted } from './onlineMeetingRestricted';
import { OnlineMeetingVideoDisabledReason } from './onlineMeetingVideoDisabledReason';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOnlineMeetingRestricted(onlineMeetingRestricted: OnlineMeetingRestricted | undefined = {} as OnlineMeetingRestricted) : Record<string, (node: ParseNode) => void> {
    return {
        "contentSharingDisabled": n => { onlineMeetingRestricted.contentSharingDisabled = n.getCollectionOfEnumValues<OnlineMeetingContentSharingDisabledReason>(OnlineMeetingContentSharingDisabledReason); },
        "@odata.type": n => { onlineMeetingRestricted.odataType = n.getStringValue(); },
        "videoDisabled": n => { onlineMeetingRestricted.videoDisabled = n.getCollectionOfEnumValues<OnlineMeetingVideoDisabledReason>(OnlineMeetingVideoDisabledReason); },
    }
}
