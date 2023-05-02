import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {FollowupFlag} from './followupFlag';
import {FollowupFlagStatus} from './followupFlagStatus';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFollowupFlag(followupFlag: FollowupFlag | undefined = {} as FollowupFlag) : Record<string, (node: ParseNode) => void> {
    return {
        "completedDateTime": n => { followupFlag.completedDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "dueDateTime": n => { followupFlag.dueDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "flagStatus": n => { followupFlag.flagStatus = n.getEnumValue<FollowupFlagStatus>(FollowupFlagStatus); },
        "@odata.type": n => { followupFlag.odataType = n.getStringValue(); },
        "startDateTime": n => { followupFlag.startDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
    }
}
