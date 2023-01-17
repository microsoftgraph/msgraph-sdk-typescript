import {AlertEvidence} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OauthApplicationEvidence extends AlertEvidence implements Parsable {
    /** Unique identifier of the application. */
    private _appId?: string | undefined;
    /** Name of the application. */
    private _displayName?: string | undefined;
    /** The unique identifier of the application object in Azure AD. */
    private _objectId?: string | undefined;
    /** The name of the application publisher. */
    private _publisher?: string | undefined;
    /**
     * Gets the appId property value. Unique identifier of the application.
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Sets the appId property value. Unique identifier of the application.
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        this._appId = value;
    };
    /**
     * Instantiates a new OauthApplicationEvidence and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. Name of the application.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the application.
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
            "appId": n => { this.appId = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "objectId": n => { this.objectId = n.getStringValue(); },
            "publisher": n => { this.publisher = n.getStringValue(); },
        };
    };
    /**
     * Gets the objectId property value. The unique identifier of the application object in Azure AD.
     * @returns a string
     */
    public get objectId() {
        return this._objectId;
    };
    /**
     * Sets the objectId property value. The unique identifier of the application object in Azure AD.
     * @param value Value to set for the objectId property.
     */
    public set objectId(value: string | undefined) {
        this._objectId = value;
    };
    /**
     * Gets the publisher property value. The name of the application publisher.
     * @returns a string
     */
    public get publisher() {
        return this._publisher;
    };
    /**
     * Sets the publisher property value. The name of the application publisher.
     * @param value Value to set for the publisher property.
     */
    public set publisher(value: string | undefined) {
        this._publisher = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appId", this.appId);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("objectId", this.objectId);
        writer.writeStringValue("publisher", this.publisher);
    };
}
