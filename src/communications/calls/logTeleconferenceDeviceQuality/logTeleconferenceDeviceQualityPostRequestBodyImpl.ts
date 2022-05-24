import {TeleconferenceDeviceQualityImpl} from '../../../models/';
import {createTeleconferenceDeviceQualityFromDiscriminatorValue} from '../../../models/createTeleconferenceDeviceQualityFromDiscriminatorValue';
import {TeleconferenceDeviceQuality} from '../../../models/teleconferenceDeviceQuality';
import {LogTeleconferenceDeviceQualityPostRequestBody} from './logTeleconferenceDeviceQualityPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the logTeleconferenceDeviceQuality method. */
export class LogTeleconferenceDeviceQualityPostRequestBodyImpl implements AdditionalDataHolder, LogTeleconferenceDeviceQualityPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The quality property */
    public quality?: TeleconferenceDeviceQuality | undefined;
    /**
     * Instantiates a new logTeleconferenceDeviceQualityPostRequestBody and sets the default values.
     * @param logTeleconferenceDeviceQualityPostRequestBodyParameterValue 
     */
    public constructor(logTeleconferenceDeviceQualityPostRequestBodyParameterValue?: LogTeleconferenceDeviceQualityPostRequestBody | undefined) {
        this.additionalData = logTeleconferenceDeviceQualityPostRequestBodyParameterValue?.additionalData ? logTeleconferenceDeviceQualityPostRequestBodyParameterValue?.additionalData! : {}
        this.quality = logTeleconferenceDeviceQualityPostRequestBodyParameterValue?.quality ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "quality": n => { this.quality = n.getObjectValue<TeleconferenceDeviceQualityImpl>(createTeleconferenceDeviceQualityFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.quality){
        writer.writeObjectValue<TeleconferenceDeviceQualityImpl>("quality", new TeleconferenceDeviceQualityImpl(this.quality));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
