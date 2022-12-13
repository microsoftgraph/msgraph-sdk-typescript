import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getAvailableExtensionProperties method.
 */
export class GetAvailableExtensionPropertiesPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The isSyncedFromOnPremises property */
    private _isSyncedFromOnPremises?: boolean | undefined;
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
     * Instantiates a new getAvailableExtensionPropertiesPostRequestBody and sets the default values.
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
            "isSyncedFromOnPremises": n => { this.isSyncedFromOnPremises = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the isSyncedFromOnPremises property value. The isSyncedFromOnPremises property
     * @returns a boolean
     */
    public get isSyncedFromOnPremises() {
        return this._isSyncedFromOnPremises;
    };
    /**
     * Sets the isSyncedFromOnPremises property value. The isSyncedFromOnPremises property
     * @param value Value to set for the isSyncedFromOnPremises property.
     */
    public set isSyncedFromOnPremises(value: boolean | undefined) {
        this._isSyncedFromOnPremises = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isSyncedFromOnPremises", this.isSyncedFromOnPremises);
        writer.writeAdditionalData(this.additionalData);
    };
}
