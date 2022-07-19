import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {Identity} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentitySet implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Optional. The application associated with this action. */
    private _application?: Identity | undefined;
    /** Optional. The device associated with this action. */
    private _device?: Identity | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Optional. The user associated with this action. */
    private _user?: Identity | undefined;
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
     * Gets the application property value. Optional. The application associated with this action.
     * @returns a identity
     */
    public get application() {
        return this._application;
    };
    /**
     * Sets the application property value. Optional. The application associated with this action.
     * @param value Value to set for the application property.
     */
    public set application(value: Identity | undefined) {
        this._application = value;
    };
    /**
     * Instantiates a new identitySet and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.identitySet";
    };
    /**
     * Gets the device property value. Optional. The device associated with this action.
     * @returns a identity
     */
    public get device() {
        return this._device;
    };
    /**
     * Sets the device property value. Optional. The device associated with this action.
     * @param value Value to set for the device property.
     */
    public set device(value: Identity | undefined) {
        this._device = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "application": n => { this.application = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
            "device": n => { this.device = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "user": n => { this.user = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Identity>("application", this.application);
        writer.writeObjectValue<Identity>("device", this.device);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<Identity>("user", this.user);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the user property value. Optional. The user associated with this action.
     * @returns a identity
     */
    public get user() {
        return this._user;
    };
    /**
     * Sets the user property value. Optional. The user associated with this action.
     * @param value Value to set for the user property.
     */
    public set user(value: Identity | undefined) {
        this._user = value;
    };
}
