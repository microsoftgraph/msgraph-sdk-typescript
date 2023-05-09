import {AutomaticRepliesSetting} from './automaticRepliesSetting';
import {AutomaticRepliesStatus} from './automaticRepliesStatus';
import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {ExternalAudienceScope} from './externalAudienceScope';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAutomaticRepliesSetting(automaticRepliesSetting: AutomaticRepliesSetting | undefined = {} as AutomaticRepliesSetting) : Record<string, (node: ParseNode) => void> {
    return {
        "externalAudience": n => { automaticRepliesSetting.externalAudience = n.getEnumValue<ExternalAudienceScope>(ExternalAudienceScope); },
        "externalReplyMessage": n => { automaticRepliesSetting.externalReplyMessage = n.getStringValue(); },
        "internalReplyMessage": n => { automaticRepliesSetting.internalReplyMessage = n.getStringValue(); },
        "@odata.type": n => { automaticRepliesSetting.odataType = n.getStringValue(); },
        "scheduledEndDateTime": n => { automaticRepliesSetting.scheduledEndDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "scheduledStartDateTime": n => { automaticRepliesSetting.scheduledStartDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "status": n => { automaticRepliesSetting.status = n.getEnumValue<AutomaticRepliesStatus>(AutomaticRepliesStatus); },
    }
}
