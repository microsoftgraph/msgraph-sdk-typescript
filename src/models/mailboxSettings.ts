import {createAutomaticRepliesSettingFromDiscriminatorValue} from './createAutomaticRepliesSettingFromDiscriminatorValue';
import {createLocaleInfoFromDiscriminatorValue} from './createLocaleInfoFromDiscriminatorValue';
import {createWorkingHoursFromDiscriminatorValue} from './createWorkingHoursFromDiscriminatorValue';
import {DelegateMeetingMessageDeliveryOptions} from './delegateMeetingMessageDeliveryOptions';
import {AutomaticRepliesSetting, LocaleInfo, WorkingHours} from './index';
import {UserPurpose} from './userPurpose';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MailboxSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Folder ID of an archive folder for the user. */
    private _archiveFolder?: string | undefined;
    /** Configuration settings to automatically notify the sender of an incoming email with a message from the signed-in user. */
    private _automaticRepliesSetting?: AutomaticRepliesSetting | undefined;
    /** The date format for the user's mailbox. */
    private _dateFormat?: string | undefined;
    /** If the user has a calendar delegate, this specifies whether the delegate, mailbox owner, or both receive meeting messages and meeting responses. Possible values are: sendToDelegateAndInformationToPrincipal, sendToDelegateAndPrincipal, sendToDelegateOnly. */
    private _delegateMeetingMessageDeliveryOptions?: DelegateMeetingMessageDeliveryOptions | undefined;
    /** The locale information for the user, including the preferred language and country/region. */
    private _language?: LocaleInfo | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The time format for the user's mailbox. */
    private _timeFormat?: string | undefined;
    /** The default time zone for the user's mailbox. */
    private _timeZone?: string | undefined;
    /** The purpose of the mailbox. Differentiates a mailbox for a single user from a shared mailbox and equipment mailbox in Exchange Online. Possible values are: user, linked, shared, room, equipment, others, unknownFutureValue. Read-only. */
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the archiveFolder property value. Folder ID of an archive folder for the user.
     * @returns a string
     */
    public get archiveFolder() {
        return this._archiveFolder;
    };
    /**
     * Sets the archiveFolder property value. Folder ID of an archive folder for the user.
     * @param value Value to set for the archiveFolder property.
     */
    public set archiveFolder(value: string | undefined) {
        this._archiveFolder = value;
    };
    /**
     * Gets the automaticRepliesSetting property value. Configuration settings to automatically notify the sender of an incoming email with a message from the signed-in user.
     * @returns a automaticRepliesSetting
     */
    public get automaticRepliesSetting() {
        return this._automaticRepliesSetting;
    };
    /**
     * Sets the automaticRepliesSetting property value. Configuration settings to automatically notify the sender of an incoming email with a message from the signed-in user.
     * @param value Value to set for the automaticRepliesSetting property.
     */
    public set automaticRepliesSetting(value: AutomaticRepliesSetting | undefined) {
        this._automaticRepliesSetting = value;
    };
    /**
     * Instantiates a new mailboxSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
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
        this._dateFormat = value;
    };
    /**
     * Gets the delegateMeetingMessageDeliveryOptions property value. If the user has a calendar delegate, this specifies whether the delegate, mailbox owner, or both receive meeting messages and meeting responses. Possible values are: sendToDelegateAndInformationToPrincipal, sendToDelegateAndPrincipal, sendToDelegateOnly.
     * @returns a delegateMeetingMessageDeliveryOptions
     */
    public get delegateMeetingMessageDeliveryOptions() {
        return this._delegateMeetingMessageDeliveryOptions;
    };
    /**
     * Sets the delegateMeetingMessageDeliveryOptions property value. If the user has a calendar delegate, this specifies whether the delegate, mailbox owner, or both receive meeting messages and meeting responses. Possible values are: sendToDelegateAndInformationToPrincipal, sendToDelegateAndPrincipal, sendToDelegateOnly.
     * @param value Value to set for the delegateMeetingMessageDeliveryOptions property.
     */
    public set delegateMeetingMessageDeliveryOptions(value: DelegateMeetingMessageDeliveryOptions | undefined) {
        this._delegateMeetingMessageDeliveryOptions = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "archiveFolder": n => { this.archiveFolder = n.getStringValue(); },
            "automaticRepliesSetting": n => { this.automaticRepliesSetting = n.getObjectValue<AutomaticRepliesSetting>(createAutomaticRepliesSettingFromDiscriminatorValue); },
            "dateFormat": n => { this.dateFormat = n.getStringValue(); },
            "delegateMeetingMessageDeliveryOptions": n => { this.delegateMeetingMessageDeliveryOptions = n.getEnumValue<DelegateMeetingMessageDeliveryOptions>(DelegateMeetingMessageDeliveryOptions); },
            "language": n => { this.language = n.getObjectValue<LocaleInfo>(createLocaleInfoFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "timeFormat": n => { this.timeFormat = n.getStringValue(); },
            "timeZone": n => { this.timeZone = n.getStringValue(); },
            "userPurpose": n => { this.userPurpose = n.getEnumValue<UserPurpose>(UserPurpose); },
            "workingHours": n => { this.workingHours = n.getObjectValue<WorkingHours>(createWorkingHoursFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the language property value. The locale information for the user, including the preferred language and country/region.
     * @returns a localeInfo
     */
    public get language() {
        return this._language;
    };
    /**
     * Sets the language property value. The locale information for the user, including the preferred language and country/region.
     * @param value Value to set for the language property.
     */
    public set language(value: LocaleInfo | undefined) {
        this._language = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("archiveFolder", this.archiveFolder);
        writer.writeObjectValue<AutomaticRepliesSetting>("automaticRepliesSetting", this.automaticRepliesSetting);
        writer.writeStringValue("dateFormat", this.dateFormat);
        writer.writeEnumValue<DelegateMeetingMessageDeliveryOptions>("delegateMeetingMessageDeliveryOptions", this.delegateMeetingMessageDeliveryOptions);
        writer.writeObjectValue<LocaleInfo>("language", this.language);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("timeFormat", this.timeFormat);
        writer.writeStringValue("timeZone", this.timeZone);
        writer.writeEnumValue<UserPurpose>("userPurpose", this.userPurpose);
        writer.writeObjectValue<WorkingHours>("workingHours", this.workingHours);
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
        this._timeFormat = value;
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
        this._timeZone = value;
    };
    /**
     * Gets the userPurpose property value. The purpose of the mailbox. Differentiates a mailbox for a single user from a shared mailbox and equipment mailbox in Exchange Online. Possible values are: user, linked, shared, room, equipment, others, unknownFutureValue. Read-only.
     * @returns a userPurpose
     */
    public get userPurpose() {
        return this._userPurpose;
    };
    /**
     * Sets the userPurpose property value. The purpose of the mailbox. Differentiates a mailbox for a single user from a shared mailbox and equipment mailbox in Exchange Online. Possible values are: user, linked, shared, room, equipment, others, unknownFutureValue. Read-only.
     * @param value Value to set for the userPurpose property.
     */
    public set userPurpose(value: UserPurpose | undefined) {
        this._userPurpose = value;
    };
    /**
     * Gets the workingHours property value. The days of the week and hours in a specific time zone that the user works.
     * @returns a workingHours
     */
    public get workingHours() {
        return this._workingHours;
    };
    /**
     * Sets the workingHours property value. The days of the week and hours in a specific time zone that the user works.
     * @param value Value to set for the workingHours property.
     */
    public set workingHours(value: WorkingHours | undefined) {
        this._workingHours = value;
    };
}
