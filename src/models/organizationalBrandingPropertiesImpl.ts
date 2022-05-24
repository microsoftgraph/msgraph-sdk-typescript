import {EntityImpl} from './index';
import {OrganizationalBrandingProperties} from './organizationalBrandingProperties';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the organizationalBranding singleton. */
export class OrganizationalBrandingPropertiesImpl extends EntityImpl implements OrganizationalBrandingProperties, Parsable {
    /** Color that appears in place of the background image in low-bandwidth connections. We recommend that you use the primary color of your banner logo or your organization color. Specify this in hexadecimal format, for example, white is #FFFFFF. */
    public backgroundColor?: string | undefined;
    /** Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image will reduce bandwidth requirements and make the page load faster. */
    public backgroundImage?: string | undefined;
    /** A relative URL for the backgroundImage property that is combined with a CDN base URL from the cdnList to provide the version served by a CDN. Read-only. */
    public backgroundImageRelativeUrl?: string | undefined;
    /** A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo. */
    public bannerLogo?: string | undefined;
    /** A relative URL for the bannerLogo property that is combined with a CDN base URL from the cdnList to provide the read-only version served by a CDN. Read-only. */
    public bannerLogoRelativeUrl?: string | undefined;
    /** A list of base URLs for all available CDN providers that are serving the assets of the current resource. Several CDN providers are used at the same time for high availability of read requests. Read-only. */
    public cdnList?: string[] | undefined;
    /** Text that appears at the bottom of the sign-in box. Use this to communicate additional information, such as the phone number to your help desk or a legal statement. This text must be in Unicode format and not exceed 1024 characters. */
    public signInPageText?: string | undefined;
    /** A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo. */
    public squareLogo?: string | undefined;
    /** A relative URL for the squareLogo property that is combined with a CDN base URL from the cdnList to provide the version served by a CDN. Read-only. */
    public squareLogoRelativeUrl?: string | undefined;
    /** A string that shows as the hint in the username textbox on the sign-in screen. This text must be a Unicode, without links or code, and can't exceed 64 characters. */
    public usernameHintText?: string | undefined;
    /**
     * Instantiates a new organizationalBrandingProperties and sets the default values.
     * @param organizationalBrandingPropertiesParameterValue 
     */
    public constructor(organizationalBrandingPropertiesParameterValue?: OrganizationalBrandingProperties | undefined) {
        super();
        this.backgroundColor = organizationalBrandingPropertiesParameterValue?.backgroundColor ;
        this.backgroundImage = organizationalBrandingPropertiesParameterValue?.backgroundImage ;
        this.backgroundImageRelativeUrl = organizationalBrandingPropertiesParameterValue?.backgroundImageRelativeUrl ;
        this.bannerLogo = organizationalBrandingPropertiesParameterValue?.bannerLogo ;
        this.bannerLogoRelativeUrl = organizationalBrandingPropertiesParameterValue?.bannerLogoRelativeUrl ;
        this.cdnList = organizationalBrandingPropertiesParameterValue?.cdnList ;
        this.signInPageText = organizationalBrandingPropertiesParameterValue?.signInPageText ;
        this.squareLogo = organizationalBrandingPropertiesParameterValue?.squareLogo ;
        this.squareLogoRelativeUrl = organizationalBrandingPropertiesParameterValue?.squareLogoRelativeUrl ;
        this.usernameHintText = organizationalBrandingPropertiesParameterValue?.usernameHintText ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "backgroundColor": n => { this.backgroundColor = n.getStringValue(); },
            "backgroundImage": n => { this.backgroundImage = n.getStringValue(); },
            "backgroundImageRelativeUrl": n => { this.backgroundImageRelativeUrl = n.getStringValue(); },
            "bannerLogo": n => { this.bannerLogo = n.getStringValue(); },
            "bannerLogoRelativeUrl": n => { this.bannerLogoRelativeUrl = n.getStringValue(); },
            "cdnList": n => { this.cdnList = n.getCollectionOfPrimitiveValues<string>(); },
            "signInPageText": n => { this.signInPageText = n.getStringValue(); },
            "squareLogo": n => { this.squareLogo = n.getStringValue(); },
            "squareLogoRelativeUrl": n => { this.squareLogoRelativeUrl = n.getStringValue(); },
            "usernameHintText": n => { this.usernameHintText = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.backgroundColor){
        writer.writeStringValue("backgroundColor", this.backgroundColor);
        }
        if(this.backgroundImage){
        writer.writeStringValue("backgroundImage", this.backgroundImage);
        }
        if(this.backgroundImageRelativeUrl){
        writer.writeStringValue("backgroundImageRelativeUrl", this.backgroundImageRelativeUrl);
        }
        if(this.bannerLogo){
        writer.writeStringValue("bannerLogo", this.bannerLogo);
        }
        if(this.bannerLogoRelativeUrl){
        writer.writeStringValue("bannerLogoRelativeUrl", this.bannerLogoRelativeUrl);
        }
        if(this.cdnList){
        writer.writeCollectionOfPrimitiveValues<string>("cdnList", this.cdnList);
        }
        if(this.signInPageText){
        writer.writeStringValue("signInPageText", this.signInPageText);
        }
        if(this.squareLogo){
        writer.writeStringValue("squareLogo", this.squareLogo);
        }
        if(this.squareLogoRelativeUrl){
        writer.writeStringValue("squareLogoRelativeUrl", this.squareLogoRelativeUrl);
        }
        if(this.usernameHintText){
        writer.writeStringValue("usernameHintText", this.usernameHintText);
        }
    };
}
