import {createLearningContentFromDiscriminatorValue} from './createLearningContentFromDiscriminatorValue';
import {Entity, LearningContent} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LearningProvider extends Entity implements Parsable {
    /** The display name that appears in Viva Learning. Required. */
    private _displayName?: string | undefined;
    /** Learning catalog items for the provider. */
    private _learningContents?: LearningContent[] | undefined;
    /** Authentication URL to access the courses for the provider. Optional. */
    private _loginWebUrl?: string | undefined;
    /** The long logo URL for the dark mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required. */
    private _longLogoWebUrlForDarkTheme?: string | undefined;
    /** The long logo URL for the light mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required. */
    private _longLogoWebUrlForLightTheme?: string | undefined;
    /** The square logo URL for the dark mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required. */
    private _squareLogoWebUrlForDarkTheme?: string | undefined;
    /** The square logo URL for the light mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required. */
    private _squareLogoWebUrlForLightTheme?: string | undefined;
    /**
     * Instantiates a new learningProvider and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The display name that appears in Viva Learning. Required.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name that appears in Viva Learning. Required.
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
            "displayName": n => { this.displayName = n.getStringValue(); },
            "learningContents": n => { this.learningContents = n.getCollectionOfObjectValues<LearningContent>(createLearningContentFromDiscriminatorValue); },
            "loginWebUrl": n => { this.loginWebUrl = n.getStringValue(); },
            "longLogoWebUrlForDarkTheme": n => { this.longLogoWebUrlForDarkTheme = n.getStringValue(); },
            "longLogoWebUrlForLightTheme": n => { this.longLogoWebUrlForLightTheme = n.getStringValue(); },
            "squareLogoWebUrlForDarkTheme": n => { this.squareLogoWebUrlForDarkTheme = n.getStringValue(); },
            "squareLogoWebUrlForLightTheme": n => { this.squareLogoWebUrlForLightTheme = n.getStringValue(); },
        };
    };
    /**
     * Gets the learningContents property value. Learning catalog items for the provider.
     * @returns a learningContent
     */
    public get learningContents() {
        return this._learningContents;
    };
    /**
     * Sets the learningContents property value. Learning catalog items for the provider.
     * @param value Value to set for the learningContents property.
     */
    public set learningContents(value: LearningContent[] | undefined) {
        this._learningContents = value;
    };
    /**
     * Gets the loginWebUrl property value. Authentication URL to access the courses for the provider. Optional.
     * @returns a string
     */
    public get loginWebUrl() {
        return this._loginWebUrl;
    };
    /**
     * Sets the loginWebUrl property value. Authentication URL to access the courses for the provider. Optional.
     * @param value Value to set for the loginWebUrl property.
     */
    public set loginWebUrl(value: string | undefined) {
        this._loginWebUrl = value;
    };
    /**
     * Gets the longLogoWebUrlForDarkTheme property value. The long logo URL for the dark mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required.
     * @returns a string
     */
    public get longLogoWebUrlForDarkTheme() {
        return this._longLogoWebUrlForDarkTheme;
    };
    /**
     * Sets the longLogoWebUrlForDarkTheme property value. The long logo URL for the dark mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required.
     * @param value Value to set for the longLogoWebUrlForDarkTheme property.
     */
    public set longLogoWebUrlForDarkTheme(value: string | undefined) {
        this._longLogoWebUrlForDarkTheme = value;
    };
    /**
     * Gets the longLogoWebUrlForLightTheme property value. The long logo URL for the light mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required.
     * @returns a string
     */
    public get longLogoWebUrlForLightTheme() {
        return this._longLogoWebUrlForLightTheme;
    };
    /**
     * Sets the longLogoWebUrlForLightTheme property value. The long logo URL for the light mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required.
     * @param value Value to set for the longLogoWebUrlForLightTheme property.
     */
    public set longLogoWebUrlForLightTheme(value: string | undefined) {
        this._longLogoWebUrlForLightTheme = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<LearningContent>("learningContents", this.learningContents);
        writer.writeStringValue("loginWebUrl", this.loginWebUrl);
        writer.writeStringValue("longLogoWebUrlForDarkTheme", this.longLogoWebUrlForDarkTheme);
        writer.writeStringValue("longLogoWebUrlForLightTheme", this.longLogoWebUrlForLightTheme);
        writer.writeStringValue("squareLogoWebUrlForDarkTheme", this.squareLogoWebUrlForDarkTheme);
        writer.writeStringValue("squareLogoWebUrlForLightTheme", this.squareLogoWebUrlForLightTheme);
    };
    /**
     * Gets the squareLogoWebUrlForDarkTheme property value. The square logo URL for the dark mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required.
     * @returns a string
     */
    public get squareLogoWebUrlForDarkTheme() {
        return this._squareLogoWebUrlForDarkTheme;
    };
    /**
     * Sets the squareLogoWebUrlForDarkTheme property value. The square logo URL for the dark mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required.
     * @param value Value to set for the squareLogoWebUrlForDarkTheme property.
     */
    public set squareLogoWebUrlForDarkTheme(value: string | undefined) {
        this._squareLogoWebUrlForDarkTheme = value;
    };
    /**
     * Gets the squareLogoWebUrlForLightTheme property value. The square logo URL for the light mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required.
     * @returns a string
     */
    public get squareLogoWebUrlForLightTheme() {
        return this._squareLogoWebUrlForLightTheme;
    };
    /**
     * Sets the squareLogoWebUrlForLightTheme property value. The square logo URL for the light mode that needs to be a publicly accessible image. This image would be saved to the blob storage of Viva Learning for rendering within the Viva Learning app. Required.
     * @param value Value to set for the squareLogoWebUrlForLightTheme property.
     */
    public set squareLogoWebUrlForLightTheme(value: string | undefined) {
        this._squareLogoWebUrlForLightTheme = value;
    };
}
