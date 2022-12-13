import {createMimeContentFromDiscriminatorValue} from './createMimeContentFromDiscriminatorValue';
import {createRgbColorFromDiscriminatorValue} from './createRgbColorFromDiscriminatorValue';
import {MimeContent, RgbColor} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * intuneBrand contains data which is used in customizing the appearance of the Company Portal applications as well as the end user web portal.
 */
export class IntuneBrand implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Email address of the person/organization responsible for IT support. */
    private _contactITEmailAddress?: string | undefined;
    /** Name of the person/organization responsible for IT support. */
    private _contactITName?: string | undefined;
    /** Text comments regarding the person/organization responsible for IT support. */
    private _contactITNotes?: string | undefined;
    /** Phone number of the person/organization responsible for IT support. */
    private _contactITPhoneNumber?: string | undefined;
    /** Logo image displayed in Company Portal apps which have a dark background behind the logo. */
    private _darkBackgroundLogo?: MimeContent | undefined;
    /** Company/organization name that is displayed to end users. */
    private _displayName?: string | undefined;
    /** Logo image displayed in Company Portal apps which have a light background behind the logo. */
    private _lightBackgroundLogo?: MimeContent | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Display name of the company/organization’s IT helpdesk site. */
    private _onlineSupportSiteName?: string | undefined;
    /** URL to the company/organization’s IT helpdesk site. */
    private _onlineSupportSiteUrl?: string | undefined;
    /** URL to the company/organization’s privacy policy. */
    private _privacyUrl?: string | undefined;
    /** Boolean that represents whether the administrator-supplied display name will be shown next to the logo image. */
    private _showDisplayNameNextToLogo?: boolean | undefined;
    /** Boolean that represents whether the administrator-supplied logo images are shown or not shown. */
    private _showLogo?: boolean | undefined;
    /** Boolean that represents whether the administrator-supplied display name will be shown next to the logo image. */
    private _showNameNextToLogo?: boolean | undefined;
    /** Primary theme color used in the Company Portal applications and web portal. */
    private _themeColor?: RgbColor | undefined;
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
     * Instantiates a new intuneBrand and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the contactITEmailAddress property value. Email address of the person/organization responsible for IT support.
     * @returns a string
     */
    public get contactITEmailAddress() {
        return this._contactITEmailAddress;
    };
    /**
     * Sets the contactITEmailAddress property value. Email address of the person/organization responsible for IT support.
     * @param value Value to set for the contactITEmailAddress property.
     */
    public set contactITEmailAddress(value: string | undefined) {
        this._contactITEmailAddress = value;
    };
    /**
     * Gets the contactITName property value. Name of the person/organization responsible for IT support.
     * @returns a string
     */
    public get contactITName() {
        return this._contactITName;
    };
    /**
     * Sets the contactITName property value. Name of the person/organization responsible for IT support.
     * @param value Value to set for the contactITName property.
     */
    public set contactITName(value: string | undefined) {
        this._contactITName = value;
    };
    /**
     * Gets the contactITNotes property value. Text comments regarding the person/organization responsible for IT support.
     * @returns a string
     */
    public get contactITNotes() {
        return this._contactITNotes;
    };
    /**
     * Sets the contactITNotes property value. Text comments regarding the person/organization responsible for IT support.
     * @param value Value to set for the contactITNotes property.
     */
    public set contactITNotes(value: string | undefined) {
        this._contactITNotes = value;
    };
    /**
     * Gets the contactITPhoneNumber property value. Phone number of the person/organization responsible for IT support.
     * @returns a string
     */
    public get contactITPhoneNumber() {
        return this._contactITPhoneNumber;
    };
    /**
     * Sets the contactITPhoneNumber property value. Phone number of the person/organization responsible for IT support.
     * @param value Value to set for the contactITPhoneNumber property.
     */
    public set contactITPhoneNumber(value: string | undefined) {
        this._contactITPhoneNumber = value;
    };
    /**
     * Gets the darkBackgroundLogo property value. Logo image displayed in Company Portal apps which have a dark background behind the logo.
     * @returns a mimeContent
     */
    public get darkBackgroundLogo() {
        return this._darkBackgroundLogo;
    };
    /**
     * Sets the darkBackgroundLogo property value. Logo image displayed in Company Portal apps which have a dark background behind the logo.
     * @param value Value to set for the darkBackgroundLogo property.
     */
    public set darkBackgroundLogo(value: MimeContent | undefined) {
        this._darkBackgroundLogo = value;
    };
    /**
     * Gets the displayName property value. Company/organization name that is displayed to end users.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Company/organization name that is displayed to end users.
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
        return {
            "contactITEmailAddress": n => { this.contactITEmailAddress = n.getStringValue(); },
            "contactITName": n => { this.contactITName = n.getStringValue(); },
            "contactITNotes": n => { this.contactITNotes = n.getStringValue(); },
            "contactITPhoneNumber": n => { this.contactITPhoneNumber = n.getStringValue(); },
            "darkBackgroundLogo": n => { this.darkBackgroundLogo = n.getObjectValue<MimeContent>(createMimeContentFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lightBackgroundLogo": n => { this.lightBackgroundLogo = n.getObjectValue<MimeContent>(createMimeContentFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "onlineSupportSiteName": n => { this.onlineSupportSiteName = n.getStringValue(); },
            "onlineSupportSiteUrl": n => { this.onlineSupportSiteUrl = n.getStringValue(); },
            "privacyUrl": n => { this.privacyUrl = n.getStringValue(); },
            "showDisplayNameNextToLogo": n => { this.showDisplayNameNextToLogo = n.getBooleanValue(); },
            "showLogo": n => { this.showLogo = n.getBooleanValue(); },
            "showNameNextToLogo": n => { this.showNameNextToLogo = n.getBooleanValue(); },
            "themeColor": n => { this.themeColor = n.getObjectValue<RgbColor>(createRgbColorFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lightBackgroundLogo property value. Logo image displayed in Company Portal apps which have a light background behind the logo.
     * @returns a mimeContent
     */
    public get lightBackgroundLogo() {
        return this._lightBackgroundLogo;
    };
    /**
     * Sets the lightBackgroundLogo property value. Logo image displayed in Company Portal apps which have a light background behind the logo.
     * @param value Value to set for the lightBackgroundLogo property.
     */
    public set lightBackgroundLogo(value: MimeContent | undefined) {
        this._lightBackgroundLogo = value;
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
     * Gets the onlineSupportSiteName property value. Display name of the company/organization’s IT helpdesk site.
     * @returns a string
     */
    public get onlineSupportSiteName() {
        return this._onlineSupportSiteName;
    };
    /**
     * Sets the onlineSupportSiteName property value. Display name of the company/organization’s IT helpdesk site.
     * @param value Value to set for the onlineSupportSiteName property.
     */
    public set onlineSupportSiteName(value: string | undefined) {
        this._onlineSupportSiteName = value;
    };
    /**
     * Gets the onlineSupportSiteUrl property value. URL to the company/organization’s IT helpdesk site.
     * @returns a string
     */
    public get onlineSupportSiteUrl() {
        return this._onlineSupportSiteUrl;
    };
    /**
     * Sets the onlineSupportSiteUrl property value. URL to the company/organization’s IT helpdesk site.
     * @param value Value to set for the onlineSupportSiteUrl property.
     */
    public set onlineSupportSiteUrl(value: string | undefined) {
        this._onlineSupportSiteUrl = value;
    };
    /**
     * Gets the privacyUrl property value. URL to the company/organization’s privacy policy.
     * @returns a string
     */
    public get privacyUrl() {
        return this._privacyUrl;
    };
    /**
     * Sets the privacyUrl property value. URL to the company/organization’s privacy policy.
     * @param value Value to set for the privacyUrl property.
     */
    public set privacyUrl(value: string | undefined) {
        this._privacyUrl = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("contactITEmailAddress", this.contactITEmailAddress);
        writer.writeStringValue("contactITName", this.contactITName);
        writer.writeStringValue("contactITNotes", this.contactITNotes);
        writer.writeStringValue("contactITPhoneNumber", this.contactITPhoneNumber);
        writer.writeObjectValue<MimeContent>("darkBackgroundLogo", this.darkBackgroundLogo);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<MimeContent>("lightBackgroundLogo", this.lightBackgroundLogo);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("onlineSupportSiteName", this.onlineSupportSiteName);
        writer.writeStringValue("onlineSupportSiteUrl", this.onlineSupportSiteUrl);
        writer.writeStringValue("privacyUrl", this.privacyUrl);
        writer.writeBooleanValue("showDisplayNameNextToLogo", this.showDisplayNameNextToLogo);
        writer.writeBooleanValue("showLogo", this.showLogo);
        writer.writeBooleanValue("showNameNextToLogo", this.showNameNextToLogo);
        writer.writeObjectValue<RgbColor>("themeColor", this.themeColor);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the showDisplayNameNextToLogo property value. Boolean that represents whether the administrator-supplied display name will be shown next to the logo image.
     * @returns a boolean
     */
    public get showDisplayNameNextToLogo() {
        return this._showDisplayNameNextToLogo;
    };
    /**
     * Sets the showDisplayNameNextToLogo property value. Boolean that represents whether the administrator-supplied display name will be shown next to the logo image.
     * @param value Value to set for the showDisplayNameNextToLogo property.
     */
    public set showDisplayNameNextToLogo(value: boolean | undefined) {
        this._showDisplayNameNextToLogo = value;
    };
    /**
     * Gets the showLogo property value. Boolean that represents whether the administrator-supplied logo images are shown or not shown.
     * @returns a boolean
     */
    public get showLogo() {
        return this._showLogo;
    };
    /**
     * Sets the showLogo property value. Boolean that represents whether the administrator-supplied logo images are shown or not shown.
     * @param value Value to set for the showLogo property.
     */
    public set showLogo(value: boolean | undefined) {
        this._showLogo = value;
    };
    /**
     * Gets the showNameNextToLogo property value. Boolean that represents whether the administrator-supplied display name will be shown next to the logo image.
     * @returns a boolean
     */
    public get showNameNextToLogo() {
        return this._showNameNextToLogo;
    };
    /**
     * Sets the showNameNextToLogo property value. Boolean that represents whether the administrator-supplied display name will be shown next to the logo image.
     * @param value Value to set for the showNameNextToLogo property.
     */
    public set showNameNextToLogo(value: boolean | undefined) {
        this._showNameNextToLogo = value;
    };
    /**
     * Gets the themeColor property value. Primary theme color used in the Company Portal applications and web portal.
     * @returns a rgbColor
     */
    public get themeColor() {
        return this._themeColor;
    };
    /**
     * Sets the themeColor property value. Primary theme color used in the Company Portal applications and web portal.
     * @param value Value to set for the themeColor property.
     */
    public set themeColor(value: RgbColor | undefined) {
        this._themeColor = value;
    };
}
