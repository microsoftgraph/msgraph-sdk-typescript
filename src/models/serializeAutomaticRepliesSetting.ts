import {AutomaticRepliesSetting} from './automaticRepliesSetting';
import {AutomaticRepliesStatus} from './automaticRepliesStatus';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {ExternalAudienceScope} from './externalAudienceScope';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAutomaticRepliesSetting(writer: SerializationWriter, automaticRepliesSetting: AutomaticRepliesSetting | undefined = {} as AutomaticRepliesSetting) : void {
        writer.writeEnumValue<ExternalAudienceScope>("externalAudience", automaticRepliesSetting.externalAudience);
        writer.writeStringValue("externalReplyMessage", automaticRepliesSetting.externalReplyMessage);
        writer.writeStringValue("internalReplyMessage", automaticRepliesSetting.internalReplyMessage);
        writer.writeStringValue("@odata.type", automaticRepliesSetting.odataType);
        writer.writeObjectValue<DateTimeTimeZone>("scheduledEndDateTime", automaticRepliesSetting.scheduledEndDateTime, serializeDateTimeTimeZone);
        writer.writeObjectValue<DateTimeTimeZone>("scheduledStartDateTime", automaticRepliesSetting.scheduledStartDateTime, serializeDateTimeTimeZone);
        writer.writeEnumValue<AutomaticRepliesStatus>("status", automaticRepliesSetting.status);
        writer.writeAdditionalData(automaticRepliesSetting.additionalData);
}
