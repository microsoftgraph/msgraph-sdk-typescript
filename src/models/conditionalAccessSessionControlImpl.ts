import {ConditionalAccessSessionControl} from './conditionalAccessSessionControl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessSessionControlImpl implements ConditionalAccessSessionControl {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Specifies whether the session control is enabled. */
    private _isEnabled?: boolean | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new conditionalAccessSessionControl and sets the default values.
     * @param conditionalAccessSessionControlParameterValue 
     */
    public constructor(conditionalAccessSessionControlParameterValue?: ConditionalAccessSessionControl | undefined) {
        this._additionalData = conditionalAccessSessionControlParameterValue?.additionalData ? conditionalAccessSessionControlParameterValue?.additionalData! : {};
        this._isEnabled = conditionalAccessSessionControlParameterValue?.isEnabled;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the isEnabled property value. Specifies whether the session control is enabled.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. Specifies whether the session control is enabled.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        if(value) {
            this._isEnabled = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.isEnabled){
            writer.writeBooleanValue("isEnabled", this.isEnabled);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
