import {TeleconferenceDeviceQuality} from '../../../models/';
import {createTeleconferenceDeviceQualityFromDiscriminatorValue} from '../../../models/createTeleconferenceDeviceQualityFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the logTeleconferenceDeviceQuality method.
 */
export class LogTeleconferenceDeviceQualityPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The quality property */
    private _quality?: TeleconferenceDeviceQuality | undefined;
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
     * Instantiates a new logTeleconferenceDeviceQualityPostRequestBody and sets the default values.
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
            "quality": n => { this.quality = n.getObjectValue<TeleconferenceDeviceQuality>(createTeleconferenceDeviceQualityFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the quality property value. The quality property
     * @returns a teleconferenceDeviceQuality
     */
    public get quality() {
        return this._quality;
    };
    /**
     * Sets the quality property value. The quality property
     * @param value Value to set for the quality property.
     */
    public set quality(value: TeleconferenceDeviceQuality | undefined) {
        this._quality = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<TeleconferenceDeviceQuality>("quality", this.quality);
        writer.writeAdditionalData(this.additionalData);
    };
}
