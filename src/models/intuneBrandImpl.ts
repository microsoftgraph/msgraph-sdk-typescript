import {createMimeContentFromDiscriminatorValue} from './createMimeContentFromDiscriminatorValue';
import {createRgbColorFromDiscriminatorValue} from './createRgbColorFromDiscriminatorValue';
import {MimeContentImpl, RgbColorImpl} from './index';
import {IntuneBrand} from './intuneBrand';
import {MimeContent} from './mimeContent';
import {RgbColor} from './rgbColor';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** intuneBrand contains data which is used in customizing the appearance of the Company Portal applications as well as the end user web portal. */
export class IntuneBrandImpl implements AdditionalDataHolder, IntuneBrand, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Email address of the person/organization responsible for IT support. */
    public contactITEmailAddress?: string | undefined;
    /** Name of the person/organization responsible for IT support. */
    public contactITName?: string | undefined;
    /** Text comments regarding the person/organization responsible for IT support. */
    public contactITNotes?: string | undefined;
    /** Phone number of the person/organization responsible for IT support. */
    public contactITPhoneNumber?: string | undefined;
    /** Logo image displayed in Company Portal apps which have a dark background behind the logo. */
    public darkBackgroundLogo?: MimeContent | undefined;
    /** Company/organization name that is displayed to end users. */
    public displayName?: string | undefined;
    /** Logo image displayed in Company Portal apps which have a light background behind the logo. */
    public lightBackgroundLogo?: MimeContent | undefined;
    /** Display name of the company/organization’s IT helpdesk site. */
    public onlineSupportSiteName?: string | undefined;
    /** URL to the company/organization’s IT helpdesk site. */
    public onlineSupportSiteUrl?: string | undefined;
    /** URL to the company/organization’s privacy policy. */
    public privacyUrl?: string | undefined;
    /** Boolean that represents whether the administrator-supplied display name will be shown next to the logo image. */
    public showDisplayNameNextToLogo?: boolean | undefined;
    /** Boolean that represents whether the administrator-supplied logo images are shown or not shown. */
    public showLogo?: boolean | undefined;
    /** Boolean that represents whether the administrator-supplied display name will be shown next to the logo image. */
    public showNameNextToLogo?: boolean | undefined;
    /** Primary theme color used in the Company Portal applications and web portal. */
    public themeColor?: RgbColor | undefined;
    /**
     * Instantiates a new intuneBrand and sets the default values.
     * @param intuneBrandParameterValue 
     */
    public constructor(intuneBrandParameterValue?: IntuneBrand | undefined) {
        this.additionalData = intuneBrandParameterValue?.additionalData ? intuneBrandParameterValue?.additionalData! : {}
        this.contactITEmailAddress = intuneBrandParameterValue?.contactITEmailAddress ;
        this.contactITName = intuneBrandParameterValue?.contactITName ;
        this.contactITNotes = intuneBrandParameterValue?.contactITNotes ;
        this.contactITPhoneNumber = intuneBrandParameterValue?.contactITPhoneNumber ;
        this.darkBackgroundLogo = intuneBrandParameterValue?.darkBackgroundLogo ;
        this.displayName = intuneBrandParameterValue?.displayName ;
        this.lightBackgroundLogo = intuneBrandParameterValue?.lightBackgroundLogo ;
        this.onlineSupportSiteName = intuneBrandParameterValue?.onlineSupportSiteName ;
        this.onlineSupportSiteUrl = intuneBrandParameterValue?.onlineSupportSiteUrl ;
        this.privacyUrl = intuneBrandParameterValue?.privacyUrl ;
        this.showDisplayNameNextToLogo = intuneBrandParameterValue?.showDisplayNameNextToLogo ;
        this.showLogo = intuneBrandParameterValue?.showLogo ;
        this.showNameNextToLogo = intuneBrandParameterValue?.showNameNextToLogo ;
        this.themeColor = intuneBrandParameterValue?.themeColor ;
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
        writer.writeObjectValue<MimeContentImpl>("darkBackgroundLogo", new MimeContentImpl(this.darkBackgroundLogo));
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lightBackgroundLogo){
        writer.writeObjectValue<MimeContentImpl>("lightBackgroundLogo", new MimeContentImpl(this.lightBackgroundLogo));
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
        writer.writeObjectValue<RgbColorImpl>("themeColor", new RgbColorImpl(this.themeColor));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
