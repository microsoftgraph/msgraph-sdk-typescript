import {AutomaticRepliesSetting} from './automaticRepliesSetting';
import {createAutomaticRepliesSettingFromDiscriminatorValue} from './createAutomaticRepliesSettingFromDiscriminatorValue';
import {createLocaleInfoFromDiscriminatorValue} from './createLocaleInfoFromDiscriminatorValue';
import {createWorkingHoursFromDiscriminatorValue} from './createWorkingHoursFromDiscriminatorValue';
import {DelegateMeetingMessageDeliveryOptions} from './delegateMeetingMessageDeliveryOptions';
import {AutomaticRepliesSettingImpl, LocaleInfoImpl, WorkingHoursImpl} from './index';
import {LocaleInfo} from './localeInfo';
import {MailboxSettings} from './mailboxSettings';
import {UserPurpose} from './userPurpose';
import {WorkingHours} from './workingHours';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MailboxSettingsImpl implements AdditionalDataHolder, MailboxSettings, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Folder ID of an archive folder for the user. Read only. */
    public archiveFolder?: string | undefined;
    /** Configuration settings to automatically notify the sender of an incoming email with a message from the signed-in user. */
    public automaticRepliesSetting?: AutomaticRepliesSetting | undefined;
    /** The date format for the user's mailbox. */
    public dateFormat?: string | undefined;
    /** If the user has a calendar delegate, this specifies whether the delegate, mailbox owner, or both receive meeting messages and meeting responses. Possible values are: sendToDelegateAndInformationToPrincipal, sendToDelegateAndPrincipal, sendToDelegateOnly. The default is sendToDelegateOnly. */
    public delegateMeetingMessageDeliveryOptions?: DelegateMeetingMessageDeliveryOptions | undefined;
    /** The locale information for the user, including the preferred language and country/region. */
    public language?: LocaleInfo | undefined;
    /** The time format for the user's mailbox. */
    public timeFormat?: string | undefined;
    /** The default time zone for the user's mailbox. */
    public timeZone?: string | undefined;
    /** The purpose of the mailbox. Used to differentiate a mailbox for a single user from a shared mailbox and equipment mailbox in Exchange Online. Read only. */
    public userPurpose?: UserPurpose | undefined;
    /** The days of the week and hours in a specific time zone that the user works. */
    public workingHours?: WorkingHours | undefined;
    /**
     * Instantiates a new mailboxSettings and sets the default values.
     * @param mailboxSettingsParameterValue 
     */
    public constructor(mailboxSettingsParameterValue?: MailboxSettings | undefined) {
        this.additionalData = mailboxSettingsParameterValue?.additionalData ? mailboxSettingsParameterValue?.additionalData! : {}
        this.archiveFolder = mailboxSettingsParameterValue?.archiveFolder ;
        this.automaticRepliesSetting = mailboxSettingsParameterValue?.automaticRepliesSetting ;
        this.dateFormat = mailboxSettingsParameterValue?.dateFormat ;
        this.delegateMeetingMessageDeliveryOptions = mailboxSettingsParameterValue?.delegateMeetingMessageDeliveryOptions ;
        this.language = mailboxSettingsParameterValue?.language ;
        this.timeFormat = mailboxSettingsParameterValue?.timeFormat ;
        this.timeZone = mailboxSettingsParameterValue?.timeZone ;
        this.userPurpose = mailboxSettingsParameterValue?.userPurpose ;
        this.workingHours = mailboxSettingsParameterValue?.workingHours ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "archiveFolder": n => { this.archiveFolder = n.getStringValue(); },
            "automaticRepliesSetting": n => { this.automaticRepliesSetting = n.getObjectValue<AutomaticRepliesSettingImpl>(createAutomaticRepliesSettingFromDiscriminatorValue); },
            "dateFormat": n => { this.dateFormat = n.getStringValue(); },
            "delegateMeetingMessageDeliveryOptions": n => { this.delegateMeetingMessageDeliveryOptions = n.getEnumValue<DelegateMeetingMessageDeliveryOptions>(DelegateMeetingMessageDeliveryOptions); },
            "language": n => { this.language = n.getObjectValue<LocaleInfoImpl>(createLocaleInfoFromDiscriminatorValue); },
            "timeFormat": n => { this.timeFormat = n.getStringValue(); },
            "timeZone": n => { this.timeZone = n.getStringValue(); },
            "userPurpose": n => { this.userPurpose = n.getEnumValue<UserPurpose>(UserPurpose); },
            "workingHours": n => { this.workingHours = n.getObjectValue<WorkingHoursImpl>(createWorkingHoursFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.archiveFolder){
        writer.writeStringValue("archiveFolder", this.archiveFolder);
        }
        if(this.automaticRepliesSetting){
        writer.writeObjectValue<AutomaticRepliesSettingImpl>("automaticRepliesSetting", new AutomaticRepliesSettingImpl(this.automaticRepliesSetting));
        }
        if(this.dateFormat){
        writer.writeStringValue("dateFormat", this.dateFormat);
        }
        if(this.delegateMeetingMessageDeliveryOptions){
        writer.writeEnumValue<DelegateMeetingMessageDeliveryOptions>("delegateMeetingMessageDeliveryOptions", this.delegateMeetingMessageDeliveryOptions);
        }
        if(this.language){
        writer.writeObjectValue<LocaleInfoImpl>("language", new LocaleInfoImpl(this.language));
        }
        if(this.timeFormat){
        writer.writeStringValue("timeFormat", this.timeFormat);
        }
        if(this.timeZone){
        writer.writeStringValue("timeZone", this.timeZone);
        }
        if(this.userPurpose){
        writer.writeEnumValue<UserPurpose>("userPurpose", this.userPurpose);
        }
        if(this.workingHours){
        writer.writeObjectValue<WorkingHoursImpl>("workingHours", new WorkingHoursImpl(this.workingHours));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
