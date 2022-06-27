import {TeleconferenceDeviceMediaQualityImpl} from './index';
import {TeleconferenceDeviceVideoQuality} from './teleconferenceDeviceVideoQuality';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeleconferenceDeviceVideoQualityImpl extends TeleconferenceDeviceMediaQualityImpl implements TeleconferenceDeviceVideoQuality {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The average inbound stream video bit rate per second. */
    public averageInboundBitRate?: number | undefined;
    /** The average inbound stream video frame rate per second. */
    public averageInboundFrameRate?: number | undefined;
    /** The average outbound stream video bit rate per second. */
    public averageOutboundBitRate?: number | undefined;
    /** The average outbound stream video frame rate per second. */
    public averageOutboundFrameRate?: number | undefined;
    /**
     * Instantiates a new TeleconferenceDeviceVideoQuality and sets the default values.
     * @param teleconferenceDeviceVideoQualityParameterValue 
     */
    public constructor(teleconferenceDeviceVideoQualityParameterValue?: TeleconferenceDeviceVideoQuality | undefined) {
        super(teleconferenceDeviceVideoQualityParameterValue);
        this.additionalData = teleconferenceDeviceVideoQualityParameterValue?.additionalData ? teleconferenceDeviceVideoQualityParameterValue?.additionalData! : {};
        this.averageInboundBitRate = teleconferenceDeviceVideoQualityParameterValue?.averageInboundBitRate;
        this.averageInboundFrameRate = teleconferenceDeviceVideoQualityParameterValue?.averageInboundFrameRate;
        this.averageOutboundBitRate = teleconferenceDeviceVideoQualityParameterValue?.averageOutboundBitRate;
        this.averageOutboundFrameRate = teleconferenceDeviceVideoQualityParameterValue?.averageOutboundFrameRate;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "averageInboundBitRate": n => { this.averageInboundBitRate = n.getNumberValue(); },
            "averageInboundFrameRate": n => { this.averageInboundFrameRate = n.getNumberValue(); },
            "averageOutboundBitRate": n => { this.averageOutboundBitRate = n.getNumberValue(); },
            "averageOutboundFrameRate": n => { this.averageOutboundFrameRate = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.averageInboundBitRate){
            writer.writeNumberValue("averageInboundBitRate", this.averageInboundBitRate);
        }
        if(this.averageInboundFrameRate){
            writer.writeNumberValue("averageInboundFrameRate", this.averageInboundFrameRate);
        }
        if(this.averageOutboundBitRate){
            writer.writeNumberValue("averageOutboundBitRate", this.averageOutboundBitRate);
        }
        if(this.averageOutboundFrameRate){
            writer.writeNumberValue("averageOutboundFrameRate", this.averageOutboundFrameRate);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
