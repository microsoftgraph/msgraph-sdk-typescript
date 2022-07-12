import {EducationResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationTeamsAppResource extends EducationResource implements Parsable {
    /** URL that points to the app's icon. */
    private _appIconWebUrl?: string | undefined;
    /** Teams App ID of the application. */
    private _appId?: string | undefined;
    /** URL for the app resource that will be opened by Teams. */
    private _teamsEmbeddedContentUrl?: string | undefined;
    /** URL for the app resource that can be opened in the browser. */
    private _webUrl?: string | undefined;
    /**
     * Gets the appIconWebUrl property value. URL that points to the app's icon.
     * @returns a string
     */
    public get appIconWebUrl() {
        return this._appIconWebUrl;
    };
    /**
     * Sets the appIconWebUrl property value. URL that points to the app's icon.
     * @param value Value to set for the appIconWebUrl property.
     */
    public set appIconWebUrl(value: string | undefined) {
        this._appIconWebUrl = value;
    };
    /**
     * Gets the appId property value. Teams App ID of the application.
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Sets the appId property value. Teams App ID of the application.
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        this._appId = value;
    };
    /**
     * Instantiates a new EducationTeamsAppResource and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appIconWebUrl": n => { this.appIconWebUrl = n.getStringValue(); },
            "appId": n => { this.appId = n.getStringValue(); },
            "teamsEmbeddedContentUrl": n => { this.teamsEmbeddedContentUrl = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appIconWebUrl", this.appIconWebUrl);
        writer.writeStringValue("appId", this.appId);
        writer.writeStringValue("teamsEmbeddedContentUrl", this.teamsEmbeddedContentUrl);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the teamsEmbeddedContentUrl property value. URL for the app resource that will be opened by Teams.
     * @returns a string
     */
    public get teamsEmbeddedContentUrl() {
        return this._teamsEmbeddedContentUrl;
    };
    /**
     * Sets the teamsEmbeddedContentUrl property value. URL for the app resource that will be opened by Teams.
     * @param value Value to set for the teamsEmbeddedContentUrl property.
     */
    public set teamsEmbeddedContentUrl(value: string | undefined) {
        this._teamsEmbeddedContentUrl = value;
    };
    /**
     * Gets the webUrl property value. URL for the app resource that can be opened in the browser.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. URL for the app resource that can be opened in the browser.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
