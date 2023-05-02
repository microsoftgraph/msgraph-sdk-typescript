import {AutomaticRepliesSetting} from './automaticRepliesSetting';
import {createAutomaticRepliesSettingFromDiscriminatorValue} from './createAutomaticRepliesSettingFromDiscriminatorValue';
import {createLocaleInfoFromDiscriminatorValue} from './createLocaleInfoFromDiscriminatorValue';
import {createWorkingHoursFromDiscriminatorValue} from './createWorkingHoursFromDiscriminatorValue';
import {DelegateMeetingMessageDeliveryOptions} from './delegateMeetingMessageDeliveryOptions';
import {LocaleInfo} from './localeInfo';
import {MailboxSettings} from './mailboxSettings';
import {serializeAutomaticRepliesSetting} from './serializeAutomaticRepliesSetting';
import {serializeLocaleInfo} from './serializeLocaleInfo';
import {serializeWorkingHours} from './serializeWorkingHours';
import {UserPurpose} from './userPurpose';
import {WorkingHours} from './workingHours';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMailboxSettings(mailboxSettings: MailboxSettings | undefined = {} as MailboxSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "archiveFolder": n => { mailboxSettings.archiveFolder = n.getStringValue(); },
        "automaticRepliesSetting": n => { mailboxSettings.automaticRepliesSetting = n.getObjectValue<AutomaticRepliesSetting>(createAutomaticRepliesSettingFromDiscriminatorValue); },
        "dateFormat": n => { mailboxSettings.dateFormat = n.getStringValue(); },
        "delegateMeetingMessageDeliveryOptions": n => { mailboxSettings.delegateMeetingMessageDeliveryOptions = n.getEnumValue<DelegateMeetingMessageDeliveryOptions>(DelegateMeetingMessageDeliveryOptions); },
        "language": n => { mailboxSettings.language = n.getObjectValue<LocaleInfo>(createLocaleInfoFromDiscriminatorValue); },
        "@odata.type": n => { mailboxSettings.odataType = n.getStringValue(); },
        "timeFormat": n => { mailboxSettings.timeFormat = n.getStringValue(); },
        "timeZone": n => { mailboxSettings.timeZone = n.getStringValue(); },
        "userPurpose": n => { mailboxSettings.userPurpose = n.getEnumValue<UserPurpose>(UserPurpose); },
        "workingHours": n => { mailboxSettings.workingHours = n.getObjectValue<WorkingHours>(createWorkingHoursFromDiscriminatorValue); },
    }
}
