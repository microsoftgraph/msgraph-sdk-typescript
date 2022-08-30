import {createLocalizedNotificationMessageFromDiscriminatorValue} from './createLocalizedNotificationMessageFromDiscriminatorValue';
import {Entity, LocalizedNotificationMessage} from './index';
import {NotificationTemplateBrandingOptions} from './notificationTemplateBrandingOptions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NotificationMessageTemplate extends Entity implements Parsable {
    /** Branding Options for the Message Template. Branding is defined in the Intune Admin Console. */
    private _brandingOptions?: NotificationTemplateBrandingOptions | undefined;
    /** The default locale to fallback onto when the requested locale is not available. */
    private _defaultLocale?: string | undefined;
    /** Display name for the Notification Message Template. */
    private _displayName?: string | undefined;
    /** DateTime the object was last modified. */
    private _lastModifiedDateTime?: Date | undefined;
    /** The list of localized messages for this Notification Message Template. */
    private _localizedNotificationMessages?: LocalizedNotificationMessage[] | undefined;
    /**
     * Gets the brandingOptions property value. Branding Options for the Message Template. Branding is defined in the Intune Admin Console.
     * @returns a notificationTemplateBrandingOptions
     */
    public get brandingOptions() {
        return this._brandingOptions;
    };
    /**
     * Sets the brandingOptions property value. Branding Options for the Message Template. Branding is defined in the Intune Admin Console.
     * @param value Value to set for the brandingOptions property.
     */
    public set brandingOptions(value: NotificationTemplateBrandingOptions | undefined) {
        this._brandingOptions = value;
    };
    /**
     * Instantiates a new NotificationMessageTemplate and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.notificationMessageTemplate";
    };
    /**
     * Gets the defaultLocale property value. The default locale to fallback onto when the requested locale is not available.
     * @returns a string
     */
    public get defaultLocale() {
        return this._defaultLocale;
    };
    /**
     * Sets the defaultLocale property value. The default locale to fallback onto when the requested locale is not available.
     * @param value Value to set for the defaultLocale property.
     */
    public set defaultLocale(value: string | undefined) {
        this._defaultLocale = value;
    };
    /**
     * Gets the displayName property value. Display name for the Notification Message Template.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name for the Notification Message Template.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "brandingOptions": n => { this.brandingOptions = n.getEnumValue<NotificationTemplateBrandingOptions>(NotificationTemplateBrandingOptions); },
            "defaultLocale": n => { this.defaultLocale = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "localizedNotificationMessages": n => { this.localizedNotificationMessages = n.getCollectionOfObjectValues<LocalizedNotificationMessage>(createLocalizedNotificationMessageFromDiscriminatorValue); },
        };
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
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the localizedNotificationMessages property value. The list of localized messages for this Notification Message Template.
     * @returns a localizedNotificationMessage
     */
    public get localizedNotificationMessages() {
        return this._localizedNotificationMessages;
    };
    /**
     * Sets the localizedNotificationMessages property value. The list of localized messages for this Notification Message Template.
     * @param value Value to set for the localizedNotificationMessages property.
     */
    public set localizedNotificationMessages(value: LocalizedNotificationMessage[] | undefined) {
        this._localizedNotificationMessages = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<NotificationTemplateBrandingOptions>("brandingOptions", this.brandingOptions);
        writer.writeStringValue("defaultLocale", this.defaultLocale);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<LocalizedNotificationMessage>("localizedNotificationMessages", this.localizedNotificationMessages);
    };
}
