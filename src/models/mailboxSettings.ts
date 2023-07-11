import {AutomaticRepliesSetting} from './automaticRepliesSetting';
import {DelegateMeetingMessageDeliveryOptions} from './delegateMeetingMessageDeliveryOptions';
import {LocaleInfo} from './localeInfo';
import {UserPurpose} from './userPurpose';
import {WorkingHours} from './workingHours';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MailboxSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Folder ID of an archive folder for the user.
     */
    archiveFolder?: string | undefined;
    /**
     * Configuration settings to automatically notify the sender of an incoming email with a message from the signed-in user.
     */
    automaticRepliesSetting?: AutomaticRepliesSetting | undefined;
    /**
     * The date format for the user's mailbox.
     */
    dateFormat?: string | undefined;
    /**
     * If the user has a calendar delegate, this specifies whether the delegate, mailbox owner, or both receive meeting messages and meeting responses. Possible values are: sendToDelegateAndInformationToPrincipal, sendToDelegateAndPrincipal, sendToDelegateOnly.
     */
    delegateMeetingMessageDeliveryOptions?: DelegateMeetingMessageDeliveryOptions | undefined;
    /**
     * The locale information for the user, including the preferred language and country/region.
     */
    language?: LocaleInfo | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The time format for the user's mailbox.
     */
    timeFormat?: string | undefined;
    /**
     * The default time zone for the user's mailbox.
     */
    timeZone?: string | undefined;
    /**
     * The purpose of the mailbox. Differentiates a mailbox for a single user from a shared mailbox and equipment mailbox in Exchange Online. Possible values are: user, linked, shared, room, equipment, others, unknownFutureValue. Read-only.
     */
    userPurpose?: UserPurpose | undefined;
    /**
     * The days of the week and hours in a specific time zone that the user works.
     */
    workingHours?: WorkingHours | undefined;
}
