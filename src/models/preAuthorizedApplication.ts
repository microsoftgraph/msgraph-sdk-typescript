import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PreAuthorizedApplication implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The unique identifier for the application. */
    private _appId?: string | undefined;
    /** The unique identifier for the oauth2PermissionScopes the application requires. */
    private _delegatedPermissionIds?: string[] | undefined;
    private _odataType?: string | undefined;
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
     * Gets the appId property value. The unique identifier for the application.
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Sets the appId property value. The unique identifier for the application.
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        this._appId = value;
    };
    /**
     * Instantiates a new preAuthorizedApplication and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the delegatedPermissionIds property value. The unique identifier for the oauth2PermissionScopes the application requires.
     * @returns a string
     */
    public get delegatedPermissionIds() {
        return this._delegatedPermissionIds;
    };
    /**
     * Sets the delegatedPermissionIds property value. The unique identifier for the oauth2PermissionScopes the application requires.
     * @param value Value to set for the delegatedPermissionIds property.
     */
    public set delegatedPermissionIds(value: string[] | undefined) {
        this._delegatedPermissionIds = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "appId": n => { this.appId = n.getStringValue(); },
            "delegatedPermissionIds": n => { this.delegatedPermissionIds = n.getCollectionOfPrimitiveValues<string>(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("appId", this.appId);
        writer.writeCollectionOfPrimitiveValues<string>("delegatedPermissionIds", this.delegatedPermissionIds);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
