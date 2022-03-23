import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the wipeManagedAppRegistrationsByDeviceTag method.  */
export class WipeManagedAppRegistrationsByDeviceTagRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    private _deviceTag?: string | undefined;
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
     * Instantiates a new wipeManagedAppRegistrationsByDeviceTagRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the deviceTag property value. 
     * @returns a string
     */
    public get deviceTag() {
        return this._deviceTag;
    };
    /**
     * Sets the deviceTag property value. 
     * @param value Value to set for the deviceTag property.
     */
    public set deviceTag(value: string | undefined) {
        this._deviceTag = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "deviceTag": (o, n) => { (o as unknown as WipeManagedAppRegistrationsByDeviceTagRequestBody).deviceTag = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("deviceTag", this.deviceTag);
        writer.writeAdditionalData(this.additionalData);
    };
}
