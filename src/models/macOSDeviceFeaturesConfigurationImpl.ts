import {AppleDeviceFeaturesConfigurationBaseImpl} from './index';
import {MacOSDeviceFeaturesConfiguration} from './macOSDeviceFeaturesConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MacOSDeviceFeaturesConfigurationImpl extends AppleDeviceFeaturesConfigurationBaseImpl implements MacOSDeviceFeaturesConfiguration {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new MacOSDeviceFeaturesConfiguration and sets the default values.
     * @param macOSDeviceFeaturesConfigurationParameterValue 
     */
    public constructor(macOSDeviceFeaturesConfigurationParameterValue?: MacOSDeviceFeaturesConfiguration | undefined) {
        super(macOSDeviceFeaturesConfigurationParameterValue);
        this.additionalData = macOSDeviceFeaturesConfigurationParameterValue?.additionalData ? macOSDeviceFeaturesConfigurationParameterValue?.additionalData! : {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeAdditionalData(this.additionalData);
    };
}
