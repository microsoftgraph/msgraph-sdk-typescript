import type {AutomaticRepliesSetting} from './automaticRepliesSetting';
import {DelegateMeetingMessageDeliveryOptions} from './delegateMeetingMessageDeliveryOptions';
import type {LocaleInfo} from './localeInfo';
import type {MailboxSettings} from './mailboxSettings';
import {serializeAutomaticRepliesSetting} from './serializeAutomaticRepliesSetting';
import {serializeLocaleInfo} from './serializeLocaleInfo';
import {serializeWorkingHours} from './serializeWorkingHours';
import {UserPurpose} from './userPurpose';
import type {WorkingHours} from './workingHours';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailboxSettings(writer: SerializationWriter, mailboxSettings: MailboxSettings | undefined = {} as MailboxSettings) : void {
        writer.writeStringValue("archiveFolder", mailboxSettings.archiveFolder);
        writer.writeObjectValue<AutomaticRepliesSetting>("automaticRepliesSetting", mailboxSettings.automaticRepliesSetting, serializeAutomaticRepliesSetting);
        writer.writeStringValue("dateFormat", mailboxSettings.dateFormat);
        writer.writeEnumValue<DelegateMeetingMessageDeliveryOptions>("delegateMeetingMessageDeliveryOptions", mailboxSettings.delegateMeetingMessageDeliveryOptions);
        writer.writeObjectValue<LocaleInfo>("language", mailboxSettings.language, serializeLocaleInfo);
        writer.writeStringValue("@odata.type", mailboxSettings.odataType);
        writer.writeStringValue("timeFormat", mailboxSettings.timeFormat);
        writer.writeStringValue("timeZone", mailboxSettings.timeZone);
        writer.writeEnumValue<UserPurpose>("userPurpose", mailboxSettings.userPurpose);
        writer.writeObjectValue<WorkingHours>("workingHours", mailboxSettings.workingHours, serializeWorkingHours);
        writer.writeAdditionalData(mailboxSettings.additionalData);
}
