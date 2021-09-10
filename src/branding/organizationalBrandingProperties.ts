import {Entity} from '../entity';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class OrganizationalBrandingProperties extends Entity implements Parsable {
    /** Color that will appear in place of the background image in low-bandwidth connections. The primary color of your banner logo or your organization color is recommended to be used here. Specify this in hexadecimal (for example, white is #FFFFFF).  */
    private _backgroundColor?: string | undefined;
    /** Image that appears as the background of the sign in page. .png or .jpg not larger than 1920x1080 and smaller than 300kb. A smaller image will reduce bandwidth requirements and make page loads more performant.  */
    private _backgroundImage?: string | undefined;
    /** A banner version of your company logo which appears appears on the sign-in page. .png or .jpg no larger than 36x245px. We recommend using a transparent image with no padding around the logo.  */
    private _bannerLogo?: string | undefined;
    /** Text that appears at the bottom of the sign-in box. You can use this to communicate additional information, such as the phone number to your help desk or a legal statement. This text must be Unicode and not exceed 1024 characters.  */
    private _signInPageText?: string | undefined;
    /** Square version of your company logo. This appears in Windows 10 out-of-box (OOBE) experiences and when Windows Autopilot is enabled for deployment. .png or .jpg no larger than 240x240px and no more than 10kb in size. We recommend using a transparent image with no padding around the logo.  */
    private _squareLogo?: string | undefined;
    /** String that shows as the hint in the username textbox on the sign in screen. This text must be Unicode, without links or code, and can't exceed 64 characters.  */
    private _usernameHintText?: string | undefined;
    /**
     * Instantiates a new organizationalBrandingProperties and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the backgroundColor property value. Color that will appear in place of the background image in low-bandwidth connections. The primary color of your banner logo or your organization color is recommended to be used here. Specify this in hexadecimal (for example, white is #FFFFFF).
     * @returns a string
     */
    public get backgroundColor() {
        return this._backgroundColor;
    };
    /**
     * Gets the backgroundImage property value. Image that appears as the background of the sign in page. .png or .jpg not larger than 1920x1080 and smaller than 300kb. A smaller image will reduce bandwidth requirements and make page loads more performant.
     * @returns a binary
     */
    public get backgroundImage() {
        return this._backgroundImage;
    };
    /**
     * Gets the bannerLogo property value. A banner version of your company logo which appears appears on the sign-in page. .png or .jpg no larger than 36x245px. We recommend using a transparent image with no padding around the logo.
     * @returns a binary
     */
    public get bannerLogo() {
        return this._bannerLogo;
    };
    /**
     * Gets the signInPageText property value. Text that appears at the bottom of the sign-in box. You can use this to communicate additional information, such as the phone number to your help desk or a legal statement. This text must be Unicode and not exceed 1024 characters.
     * @returns a string
     */
    public get signInPageText() {
        return this._signInPageText;
    };
    /**
     * Gets the squareLogo property value. Square version of your company logo. This appears in Windows 10 out-of-box (OOBE) experiences and when Windows Autopilot is enabled for deployment. .png or .jpg no larger than 240x240px and no more than 10kb in size. We recommend using a transparent image with no padding around the logo.
     * @returns a binary
     */
    public get squareLogo() {
        return this._squareLogo;
    };
    /**
     * Gets the usernameHintText property value. String that shows as the hint in the username textbox on the sign in screen. This text must be Unicode, without links or code, and can't exceed 64 characters.
     * @returns a string
     */
    public get usernameHintText() {
        return this._usernameHintText;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["backgroundColor", (o, n) => { (o as unknown as OrganizationalBrandingProperties).backgroundColor = n.getStringValue(); }],
            ["backgroundImage", (o, n) => { (o as unknown as OrganizationalBrandingProperties).backgroundImage = n.getStringValue(); }],
            ["bannerLogo", (o, n) => { (o as unknown as OrganizationalBrandingProperties).bannerLogo = n.getStringValue(); }],
            ["signInPageText", (o, n) => { (o as unknown as OrganizationalBrandingProperties).signInPageText = n.getStringValue(); }],
            ["squareLogo", (o, n) => { (o as unknown as OrganizationalBrandingProperties).squareLogo = n.getStringValue(); }],
            ["usernameHintText", (o, n) => { (o as unknown as OrganizationalBrandingProperties).usernameHintText = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("backgroundColor", this.backgroundColor);
        writer.writeStringValue("backgroundImage", this.backgroundImage);
        writer.writeStringValue("bannerLogo", this.bannerLogo);
        writer.writeStringValue("signInPageText", this.signInPageText);
        writer.writeStringValue("squareLogo", this.squareLogo);
        writer.writeStringValue("usernameHintText", this.usernameHintText);
    };
    /**
     * Sets the backgroundColor property value. Color that will appear in place of the background image in low-bandwidth connections. The primary color of your banner logo or your organization color is recommended to be used here. Specify this in hexadecimal (for example, white is #FFFFFF).
     * @param value Value to set for the backgroundColor property.
     */
    public set backgroundColor(value: string | undefined) {
        this._backgroundColor = value;
    };
    /**
     * Sets the backgroundImage property value. Image that appears as the background of the sign in page. .png or .jpg not larger than 1920x1080 and smaller than 300kb. A smaller image will reduce bandwidth requirements and make page loads more performant.
     * @param value Value to set for the backgroundImage property.
     */
    public set backgroundImage(value: string | undefined) {
        this._backgroundImage = value;
    };
    /**
     * Sets the bannerLogo property value. A banner version of your company logo which appears appears on the sign-in page. .png or .jpg no larger than 36x245px. We recommend using a transparent image with no padding around the logo.
     * @param value Value to set for the bannerLogo property.
     */
    public set bannerLogo(value: string | undefined) {
        this._bannerLogo = value;
    };
    /**
     * Sets the signInPageText property value. Text that appears at the bottom of the sign-in box. You can use this to communicate additional information, such as the phone number to your help desk or a legal statement. This text must be Unicode and not exceed 1024 characters.
     * @param value Value to set for the signInPageText property.
     */
    public set signInPageText(value: string | undefined) {
        this._signInPageText = value;
    };
    /**
     * Sets the squareLogo property value. Square version of your company logo. This appears in Windows 10 out-of-box (OOBE) experiences and when Windows Autopilot is enabled for deployment. .png or .jpg no larger than 240x240px and no more than 10kb in size. We recommend using a transparent image with no padding around the logo.
     * @param value Value to set for the squareLogo property.
     */
    public set squareLogo(value: string | undefined) {
        this._squareLogo = value;
    };
    /**
     * Sets the usernameHintText property value. String that shows as the hint in the username textbox on the sign in screen. This text must be Unicode, without links or code, and can't exceed 64 characters.
     * @param value Value to set for the usernameHintText property.
     */
    public set usernameHintText(value: string | undefined) {
        this._usernameHintText = value;
    };
}
