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

export class MailboxSettingsImpl implements MailboxSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Folder ID of an archive folder for the user. Read only. */
    private _archiveFolder?: string | undefined;
    /** Configuration settings to automatically notify the sender of an incoming email with a message from the signed-in user. */
    private _automaticRepliesSetting?: AutomaticRepliesSetting | undefined;
    /** The date format for the user's mailbox. */
    private _dateFormat?: string | undefined;
    /** If the user has a calendar delegate, this specifies whether the delegate, mailbox owner, or both receive meeting messages and meeting responses. Possible values are: sendToDelegateAndInformationToPrincipal, sendToDelegateAndPrincipal, sendToDelegateOnly. The default is sendToDelegateOnly. */
    private _delegateMeetingMessageDeliveryOptions?: DelegateMeetingMessageDeliveryOptions | undefined;
    /** The locale information for the user, including the preferred language and country/region. */
    private _language?: LocaleInfo | undefined;
    /** The time format for the user's mailbox. */
    private _timeFormat?: string | undefined;
    /** The default time zone for the user's mailbox. */
    private _timeZone?: string | undefined;
    /** The purpose of the mailbox. Used to differentiate a mailbox for a single user from a shared mailbox and equipment mailbox in Exchange Online. Read only. */
    private _userPurpose?: UserPurpose | undefined;
    /** The days of the week and hours in a specific time zone that the user works. */
    private _workingHours?: WorkingHours | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the archiveFolder property value. Folder ID of an archive folder for the user. Read only.
     * @returns a string
     */
    public get archiveFolder() {
        return this._archiveFolder;
    };
    /**
     * Sets the archiveFolder property value. Folder ID of an archive folder for the user. Read only.
     * @param value Value to set for the archiveFolder property.
     */
    public set archiveFolder(value: string | undefined) {
        if(value) {
            this._archiveFolder = value;
        }
    };
    /**
     * Gets the automaticRepliesSetting property value. Configuration settings to automatically notify the sender of an incoming email with a message from the signed-in user.
     * @returns a AutomaticRepliesSettingInterface
     */
    public get automaticRepliesSetting() {
        return this._automaticRepliesSetting;
    };
    /**
     * Sets the automaticRepliesSetting property value. Configuration settings to automatically notify the sender of an incoming email with a message from the signed-in user.
     * @param value Value to set for the automaticRepliesSetting property.
     */
    public set automaticRepliesSetting(value: AutomaticRepliesSetting | undefined) {
        if(value) {
            this._automaticRepliesSetting = value instanceof AutomaticRepliesSettingImpl? value as AutomaticRepliesSettingImpl: new AutomaticRepliesSettingImpl(value);
        }
    };
    /**
     * Instantiates a new mailboxSettings and sets the default values.
     * @param mailboxSettingsParameterValue 
     */
    public constructor(mailboxSettingsParameterValue?: MailboxSettings | undefined) {
        this._additionalData = mailboxSettingsParameterValue?.additionalData ? mailboxSettingsParameterValue?.additionalData! : {};
        this._archiveFolder = mailboxSettingsParameterValue?.archiveFolder;
        this._automaticRepliesSetting = mailboxSettingsParameterValue?.automaticRepliesSetting;
        this._dateFormat = mailboxSettingsParameterValue?.dateFormat;
        this._delegateMeetingMessageDeliveryOptions = mailboxSettingsParameterValue?.delegateMeetingMessageDeliveryOptions;
        this._language = mailboxSettingsParameterValue?.language;
        this._timeFormat = mailboxSettingsParameterValue?.timeFormat;
        this._timeZone = mailboxSettingsParameterValue?.timeZone;
        this._userPurpose = mailboxSettingsParameterValue?.userPurpose;
        this._workingHours = mailboxSettingsParameterValue?.workingHours;
    };
    /**
     * Gets the dateFormat property value. The date format for the user's mailbox.
     * @returns a string
     */
    public get dateFormat() {
        return this._dateFormat;
    };
    /**
     * Sets the dateFormat property value. The date format for the user's mailbox.
     * @param value Value to set for the dateFormat property.
     */
    public set dateFormat(value: string | undefined) {
        if(value) {
            this._dateFormat = value;
        }
    };
    /**
     * Gets the delegateMeetingMessageDeliveryOptions property value. If the user has a calendar delegate, this specifies whether the delegate, mailbox owner, or both receive meeting messages and meeting responses. Possible values are: sendToDelegateAndInformationToPrincipal, sendToDelegateAndPrincipal, sendToDelegateOnly. The default is sendToDelegateOnly.
     * @returns a delegateMeetingMessageDeliveryOptions
     */
    public get delegateMeetingMessageDeliveryOptions() {
        return this._delegateMeetingMessageDeliveryOptions;
    };
    /**
     * Sets the delegateMeetingMessageDeliveryOptions property value. If the user has a calendar delegate, this specifies whether the delegate, mailbox owner, or both receive meeting messages and meeting responses. Possible values are: sendToDelegateAndInformationToPrincipal, sendToDelegateAndPrincipal, sendToDelegateOnly. The default is sendToDelegateOnly.
     * @param value Value to set for the delegateMeetingMessageDeliveryOptions property.
     */
    public set delegateMeetingMessageDeliveryOptions(value: DelegateMeetingMessageDeliveryOptions | undefined) {
        if(value) {
            this._delegateMeetingMessageDeliveryOptions = value;
        }
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
     * Gets the language property value. The locale information for the user, including the preferred language and country/region.
     * @returns a LocaleInfoInterface
     */
    public get language() {
        return this._language;
    };
    /**
     * Sets the language property value. The locale information for the user, including the preferred language and country/region.
     * @param value Value to set for the language property.
     */
    public set language(value: LocaleInfo | undefined) {
        if(value) {
            this._language = value instanceof LocaleInfoImpl? value as LocaleInfoImpl: new LocaleInfoImpl(value);
        }
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
            writer.writeObjectValue<AutomaticRepliesSettingImpl>("automaticRepliesSetting", (this.automaticRepliesSetting instanceof AutomaticRepliesSettingImpl? this.automaticRepliesSetting as AutomaticRepliesSettingImpl: new AutomaticRepliesSettingImpl(this.automaticRepliesSetting)));
        }
        if(this.dateFormat){
            writer.writeStringValue("dateFormat", this.dateFormat);
        }
        if(this.delegateMeetingMessageDeliveryOptions){
            writer.writeEnumValue<DelegateMeetingMessageDeliveryOptions>("delegateMeetingMessageDeliveryOptions", this.delegateMeetingMessageDeliveryOptions);
        }
        if(this.language){
            writer.writeObjectValue<LocaleInfoImpl>("language", (this.language instanceof LocaleInfoImpl? this.language as LocaleInfoImpl: new LocaleInfoImpl(this.language)));
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
            writer.writeObjectValue<WorkingHoursImpl>("workingHours", (this.workingHours instanceof WorkingHoursImpl? this.workingHours as WorkingHoursImpl: new WorkingHoursImpl(this.workingHours)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the timeFormat property value. The time format for the user's mailbox.
     * @returns a string
     */
    public get timeFormat() {
        return this._timeFormat;
    };
    /**
     * Sets the timeFormat property value. The time format for the user's mailbox.
     * @param value Value to set for the timeFormat property.
     */
    public set timeFormat(value: string | undefined) {
        if(value) {
            this._timeFormat = value;
        }
    };
    /**
     * Gets the timeZone property value. The default time zone for the user's mailbox.
     * @returns a string
     */
    public get timeZone() {
        return this._timeZone;
    };
    /**
     * Sets the timeZone property value. The default time zone for the user's mailbox.
     * @param value Value to set for the timeZone property.
     */
    public set timeZone(value: string | undefined) {
        if(value) {
            this._timeZone = value;
        }
    };
    /**
     * Gets the userPurpose property value. The purpose of the mailbox. Used to differentiate a mailbox for a single user from a shared mailbox and equipment mailbox in Exchange Online. Read only.
     * @returns a userPurpose
     */
    public get userPurpose() {
        return this._userPurpose;
    };
    /**
     * Sets the userPurpose property value. The purpose of the mailbox. Used to differentiate a mailbox for a single user from a shared mailbox and equipment mailbox in Exchange Online. Read only.
     * @param value Value to set for the userPurpose property.
     */
    public set userPurpose(value: UserPurpose | undefined) {
        if(value) {
            this._userPurpose = value;
        }
    };
    /**
     * Gets the workingHours property value. The days of the week and hours in a specific time zone that the user works.
     * @returns a WorkingHoursInterface
     */
    public get workingHours() {
        return this._workingHours;
    };
    /**
     * Sets the workingHours property value. The days of the week and hours in a specific time zone that the user works.
     * @param value Value to set for the workingHours property.
     */
    public set workingHours(value: WorkingHours | undefined) {
        if(value) {
            this._workingHours = value instanceof WorkingHoursImpl? value as WorkingHoursImpl: new WorkingHoursImpl(value);
        }
    };
}
