import {createMimeContentFromDiscriminatorValue} from './createMimeContentFromDiscriminatorValue';
import {createRgbColorFromDiscriminatorValue} from './createRgbColorFromDiscriminatorValue';
import {MimeContentImpl, RgbColorImpl} from './index';
import {IntuneBrand} from './intuneBrand';
import {MimeContent} from './mimeContent';
import {RgbColor} from './rgbColor';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** intuneBrand contains data which is used in customizing the appearance of the Company Portal applications as well as the end user web portal. */
export class IntuneBrandImpl implements IntuneBrand {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new intuneBrand and sets the default values.
     * @param intuneBrandParameterValue 
     */
    public constructor(intuneBrandParameterValue?: IntuneBrand | undefined) {
        this._additionalData = intuneBrandParameterValue?.additionalData ? intuneBrandParameterValue?.additionalData! : {};
        this._contactITEmailAddress = intuneBrandParameterValue?.contactITEmailAddress;
        this._contactITName = intuneBrandParameterValue?.contactITName;
        this._contactITNotes = intuneBrandParameterValue?.contactITNotes;
        this._contactITPhoneNumber = intuneBrandParameterValue?.contactITPhoneNumber;
        this._darkBackgroundLogo = intuneBrandParameterValue?.darkBackgroundLogo;
        this._displayName = intuneBrandParameterValue?.displayName;
        this._lightBackgroundLogo = intuneBrandParameterValue?.lightBackgroundLogo;
        this._onlineSupportSiteName = intuneBrandParameterValue?.onlineSupportSiteName;
        this._onlineSupportSiteUrl = intuneBrandParameterValue?.onlineSupportSiteUrl;
        this._privacyUrl = intuneBrandParameterValue?.privacyUrl;
        this._showDisplayNameNextToLogo = intuneBrandParameterValue?.showDisplayNameNextToLogo;
        this._showLogo = intuneBrandParameterValue?.showLogo;
        this._showNameNextToLogo = intuneBrandParameterValue?.showNameNextToLogo;
        this._themeColor = intuneBrandParameterValue?.themeColor;
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
        if(value) {
            this._contactITEmailAddress = value;
        }
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
        if(value) {
            this._contactITName = value;
        }
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
        if(value) {
            this._contactITNotes = value;
        }
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
        if(value) {
            this._contactITPhoneNumber = value;
        }
    };
    /**
     * Gets the darkBackgroundLogo property value. Logo image displayed in Company Portal apps which have a dark background behind the logo.
     * @returns a MimeContentInterface
     */
    public get darkBackgroundLogo() {
        return this._darkBackgroundLogo;
    };
    /**
     * Sets the darkBackgroundLogo property value. Logo image displayed in Company Portal apps which have a dark background behind the logo.
     * @param value Value to set for the darkBackgroundLogo property.
     */
    public set darkBackgroundLogo(value: MimeContent | undefined) {
        if(value) {
            this._darkBackgroundLogo = value instanceof MimeContentImpl? value as MimeContentImpl: new MimeContentImpl(value);
        }
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
        if(value) {
            this._displayName = value;
        }
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
            "darkBackgroundLogo": n => { this.darkBackgroundLogo = n.getObjectValue<MimeContentImpl>(createMimeContentFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lightBackgroundLogo": n => { this.lightBackgroundLogo = n.getObjectValue<MimeContentImpl>(createMimeContentFromDiscriminatorValue); },
            "onlineSupportSiteName": n => { this.onlineSupportSiteName = n.getStringValue(); },
            "onlineSupportSiteUrl": n => { this.onlineSupportSiteUrl = n.getStringValue(); },
            "privacyUrl": n => { this.privacyUrl = n.getStringValue(); },
            "showDisplayNameNextToLogo": n => { this.showDisplayNameNextToLogo = n.getBooleanValue(); },
            "showLogo": n => { this.showLogo = n.getBooleanValue(); },
            "showNameNextToLogo": n => { this.showNameNextToLogo = n.getBooleanValue(); },
            "themeColor": n => { this.themeColor = n.getObjectValue<RgbColorImpl>(createRgbColorFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lightBackgroundLogo property value. Logo image displayed in Company Portal apps which have a light background behind the logo.
     * @returns a MimeContentInterface
     */
    public get lightBackgroundLogo() {
        return this._lightBackgroundLogo;
    };
    /**
     * Sets the lightBackgroundLogo property value. Logo image displayed in Company Portal apps which have a light background behind the logo.
     * @param value Value to set for the lightBackgroundLogo property.
     */
    public set lightBackgroundLogo(value: MimeContent | undefined) {
        if(value) {
            this._lightBackgroundLogo = value instanceof MimeContentImpl? value as MimeContentImpl: new MimeContentImpl(value);
        }
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
        if(value) {
            this._onlineSupportSiteName = value;
        }
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
        if(value) {
            this._onlineSupportSiteUrl = value;
        }
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
        if(value) {
            this._privacyUrl = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.contactITEmailAddress){
            writer.writeStringValue("contactITEmailAddress", this.contactITEmailAddress);
        }
        if(this.contactITName){
            writer.writeStringValue("contactITName", this.contactITName);
        }
        if(this.contactITNotes){
            writer.writeStringValue("contactITNotes", this.contactITNotes);
        }
        if(this.contactITPhoneNumber){
            writer.writeStringValue("contactITPhoneNumber", this.contactITPhoneNumber);
        }
        if(this.darkBackgroundLogo){
            writer.writeObjectValue<MimeContentImpl>("darkBackgroundLogo", (this.darkBackgroundLogo instanceof MimeContentImpl? this.darkBackgroundLogo as MimeContentImpl: new MimeContentImpl(this.darkBackgroundLogo)));
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lightBackgroundLogo){
            writer.writeObjectValue<MimeContentImpl>("lightBackgroundLogo", (this.lightBackgroundLogo instanceof MimeContentImpl? this.lightBackgroundLogo as MimeContentImpl: new MimeContentImpl(this.lightBackgroundLogo)));
        }
        if(this.onlineSupportSiteName){
            writer.writeStringValue("onlineSupportSiteName", this.onlineSupportSiteName);
        }
        if(this.onlineSupportSiteUrl){
            writer.writeStringValue("onlineSupportSiteUrl", this.onlineSupportSiteUrl);
        }
        if(this.privacyUrl){
            writer.writeStringValue("privacyUrl", this.privacyUrl);
        }
        if(this.showDisplayNameNextToLogo){
            writer.writeBooleanValue("showDisplayNameNextToLogo", this.showDisplayNameNextToLogo);
        }
        if(this.showLogo){
            writer.writeBooleanValue("showLogo", this.showLogo);
        }
        if(this.showNameNextToLogo){
            writer.writeBooleanValue("showNameNextToLogo", this.showNameNextToLogo);
        }
        if(this.themeColor){
            writer.writeObjectValue<RgbColorImpl>("themeColor", (this.themeColor instanceof RgbColorImpl? this.themeColor as RgbColorImpl: new RgbColorImpl(this.themeColor)));
        }
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
        if(value) {
            this._showDisplayNameNextToLogo = value;
        }
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
        if(value) {
            this._showLogo = value;
        }
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
        if(value) {
            this._showNameNextToLogo = value;
        }
    };
    /**
     * Gets the themeColor property value. Primary theme color used in the Company Portal applications and web portal.
     * @returns a RgbColorInterface
     */
    public get themeColor() {
        return this._themeColor;
    };
    /**
     * Sets the themeColor property value. Primary theme color used in the Company Portal applications and web portal.
     * @param value Value to set for the themeColor property.
     */
    public set themeColor(value: RgbColor | undefined) {
        if(value) {
            this._themeColor = value instanceof RgbColorImpl? value as RgbColorImpl: new RgbColorImpl(value);
        }
    };
}
