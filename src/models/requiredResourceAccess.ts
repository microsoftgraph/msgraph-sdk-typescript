import {createResourceAccessFromDiscriminatorValue} from './createResourceAccessFromDiscriminatorValue';
import {ResourceAccess} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RequiredResourceAccess implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The list of OAuth2.0 permission scopes and app roles that the application requires from the specified resource. */
    private _resourceAccess?: ResourceAccess[] | undefined;
    /** The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application. */
    private _resourceAppId?: string | undefined;
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
     * Instantiates a new requiredResourceAccess and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "resourceAccess": n => { this.resourceAccess = n.getCollectionOfObjectValues<ResourceAccess>(createResourceAccessFromDiscriminatorValue); },
            "resourceAppId": n => { this.resourceAppId = n.getStringValue(); },
        };
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
     * Gets the resourceAccess property value. The list of OAuth2.0 permission scopes and app roles that the application requires from the specified resource.
     * @returns a resourceAccess
     */
    public get resourceAccess() {
        return this._resourceAccess;
    };
    /**
     * Sets the resourceAccess property value. The list of OAuth2.0 permission scopes and app roles that the application requires from the specified resource.
     * @param value Value to set for the resourceAccess property.
     */
    public set resourceAccess(value: ResourceAccess[] | undefined) {
        this._resourceAccess = value;
    };
    /**
     * Gets the resourceAppId property value. The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application.
     * @returns a string
     */
    public get resourceAppId() {
        return this._resourceAppId;
    };
    /**
     * Sets the resourceAppId property value. The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application.
     * @param value Value to set for the resourceAppId property.
     */
    public set resourceAppId(value: string | undefined) {
        this._resourceAppId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<ResourceAccess>("resourceAccess", this.resourceAccess);
        writer.writeStringValue("resourceAppId", this.resourceAppId);
        writer.writeAdditionalData(this.additionalData);
    };
}
