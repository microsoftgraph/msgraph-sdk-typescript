import {EntityImpl} from './index';
import {LocalizedNotificationMessage} from './localizedNotificationMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The text content of a Notification Message Template for the specified locale. */
export class LocalizedNotificationMessageImpl extends EntityImpl implements LocalizedNotificationMessage {
    /** Flag to indicate whether or not this is the default locale for language fallback. This flag can only be set. To unset, set this property to true on another Localized Notification Message. */
    private _isDefault?: boolean | undefined;
    /** DateTime the object was last modified. */
    private _lastModifiedDateTime?: Date | undefined;
    /** The Locale for which this message is destined. */
    private _locale?: string | undefined;
    /** The Message Template content. */
    private _messageTemplate?: string | undefined;
    /** The Message Template Subject. */
    private _subject?: string | undefined;
    /**
     * Instantiates a new localizedNotificationMessage and sets the default values.
     * @param localizedNotificationMessageParameterValue 
     */
    public constructor(localizedNotificationMessageParameterValue?: LocalizedNotificationMessage | undefined) {
        super(localizedNotificationMessageParameterValue);
        this._isDefault = localizedNotificationMessageParameterValue?.isDefault;
        this._lastModifiedDateTime = localizedNotificationMessageParameterValue?.lastModifiedDateTime;
        this._locale = localizedNotificationMessageParameterValue?.locale;
        this._messageTemplate = localizedNotificationMessageParameterValue?.messageTemplate;
        this._subject = localizedNotificationMessageParameterValue?.subject;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "isDefault": n => { this.isDefault = n.getBooleanValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "locale": n => { this.locale = n.getStringValue(); },
            "messageTemplate": n => { this.messageTemplate = n.getStringValue(); },
            "subject": n => { this.subject = n.getStringValue(); },
        };
    };
    /**
     * Gets the isDefault property value. Flag to indicate whether or not this is the default locale for language fallback. This flag can only be set. To unset, set this property to true on another Localized Notification Message.
     * @returns a boolean
     */
    public get isDefault() {
        return this._isDefault;
    };
    /**
     * Sets the isDefault property value. Flag to indicate whether or not this is the default locale for language fallback. This flag can only be set. To unset, set this property to true on another Localized Notification Message.
     * @param value Value to set for the isDefault property.
     */
    public set isDefault(value: boolean | undefined) {
        if(value) {
            this._isDefault = value;
        }
    };
    /**
     * Gets the lastModifiedDateTime property value. DateTime the object was last modified.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. DateTime the object was last modified.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Gets the locale property value. The Locale for which this message is destined.
     * @returns a string
     */
    public get locale() {
        return this._locale;
    };
    /**
     * Sets the locale property value. The Locale for which this message is destined.
     * @param value Value to set for the locale property.
     */
    public set locale(value: string | undefined) {
        if(value) {
            this._locale = value;
        }
    };
    /**
     * Gets the messageTemplate property value. The Message Template content.
     * @returns a string
     */
    public get messageTemplate() {
        return this._messageTemplate;
    };
    /**
     * Sets the messageTemplate property value. The Message Template content.
     * @param value Value to set for the messageTemplate property.
     */
    public set messageTemplate(value: string | undefined) {
        if(value) {
            this._messageTemplate = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.isDefault){
            writer.writeBooleanValue("isDefault", this.isDefault);
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.locale){
            writer.writeStringValue("locale", this.locale);
        }
        if(this.messageTemplate){
            writer.writeStringValue("messageTemplate", this.messageTemplate);
        }
        if(this.subject){
            writer.writeStringValue("subject", this.subject);
        }
    };
    /**
     * Gets the subject property value. The Message Template Subject.
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Sets the subject property value. The Message Template Subject.
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        if(value) {
            this._subject = value;
        }
    };
}
