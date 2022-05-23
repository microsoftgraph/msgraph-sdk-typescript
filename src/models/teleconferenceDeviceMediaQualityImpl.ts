import {TeleconferenceDeviceMediaQuality} from './teleconferenceDeviceMediaQuality';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeleconferenceDeviceMediaQualityImpl implements AdditionalDataHolder, Parsable, TeleconferenceDeviceMediaQuality {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The average inbound stream network jitter. */
    public averageInboundJitter?: Duration | undefined;
    /** The average inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%. */
    public averageInboundPacketLossRateInPercentage?: number | undefined;
    /** The average inbound stream network round trip delay. */
    public averageInboundRoundTripDelay?: Duration | undefined;
    /** The average outbound stream network jitter. */
    public averageOutboundJitter?: Duration | undefined;
    /** The average outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%. */
    public averageOutboundPacketLossRateInPercentage?: number | undefined;
    /** The average outbound stream network round trip delay. */
    public averageOutboundRoundTripDelay?: Duration | undefined;
    /** The channel index of media. Indexing begins with 1.  If a media session contains 3 video modalities, channel indexes will be 1, 2, and 3. */
    public channelIndex?: number | undefined;
    /** The total number of the inbound packets. */
    public inboundPackets?: number | undefined;
    /** the local IP address for the media session. */
    public localIPAddress?: string | undefined;
    /** The local media port. */
    public localPort?: number | undefined;
    /** The maximum inbound stream network jitter. */
    public maximumInboundJitter?: Duration | undefined;
    /** The maximum inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%. */
    public maximumInboundPacketLossRateInPercentage?: number | undefined;
    /** The maximum inbound stream network round trip delay. */
    public maximumInboundRoundTripDelay?: Duration | undefined;
    /** The maximum outbound stream network jitter. */
    public maximumOutboundJitter?: Duration | undefined;
    /** The maximum outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%. */
    public maximumOutboundPacketLossRateInPercentage?: number | undefined;
    /** The maximum outbound stream network round trip delay. */
    public maximumOutboundRoundTripDelay?: Duration | undefined;
    /** The total modality duration. If the media enabled and disabled multiple times, MediaDuration will the summation of all of the durations. */
    public mediaDuration?: Duration | undefined;
    /** The network link speed in bytes */
    public networkLinkSpeedInBytes?: number | undefined;
    /** The total number of the outbound packets. */
    public outboundPackets?: number | undefined;
    /** The remote IP address for the media session. */
    public remoteIPAddress?: string | undefined;
    /** The remote media port. */
    public remotePort?: number | undefined;
    /**
     * Instantiates a new teleconferenceDeviceMediaQuality and sets the default values.
     * @param teleconferenceDeviceMediaQualityParameterValue 
     */
    public constructor(teleconferenceDeviceMediaQualityParameterValue?: TeleconferenceDeviceMediaQuality | undefined) {
        this.additionalData = teleconferenceDeviceMediaQualityParameterValue?.additionalData ? teleconferenceDeviceMediaQualityParameterValue?.additionalData! : {}
        this.averageInboundJitter = teleconferenceDeviceMediaQualityParameterValue?.averageInboundJitter ;
        this.averageInboundPacketLossRateInPercentage = teleconferenceDeviceMediaQualityParameterValue?.averageInboundPacketLossRateInPercentage ;
        this.averageInboundRoundTripDelay = teleconferenceDeviceMediaQualityParameterValue?.averageInboundRoundTripDelay ;
        this.averageOutboundJitter = teleconferenceDeviceMediaQualityParameterValue?.averageOutboundJitter ;
        this.averageOutboundPacketLossRateInPercentage = teleconferenceDeviceMediaQualityParameterValue?.averageOutboundPacketLossRateInPercentage ;
        this.averageOutboundRoundTripDelay = teleconferenceDeviceMediaQualityParameterValue?.averageOutboundRoundTripDelay ;
        this.channelIndex = teleconferenceDeviceMediaQualityParameterValue?.channelIndex ;
        this.inboundPackets = teleconferenceDeviceMediaQualityParameterValue?.inboundPackets ;
        this.localIPAddress = teleconferenceDeviceMediaQualityParameterValue?.localIPAddress ;
        this.localPort = teleconferenceDeviceMediaQualityParameterValue?.localPort ;
        this.maximumInboundJitter = teleconferenceDeviceMediaQualityParameterValue?.maximumInboundJitter ;
        this.maximumInboundPacketLossRateInPercentage = teleconferenceDeviceMediaQualityParameterValue?.maximumInboundPacketLossRateInPercentage ;
        this.maximumInboundRoundTripDelay = teleconferenceDeviceMediaQualityParameterValue?.maximumInboundRoundTripDelay ;
        this.maximumOutboundJitter = teleconferenceDeviceMediaQualityParameterValue?.maximumOutboundJitter ;
        this.maximumOutboundPacketLossRateInPercentage = teleconferenceDeviceMediaQualityParameterValue?.maximumOutboundPacketLossRateInPercentage ;
        this.maximumOutboundRoundTripDelay = teleconferenceDeviceMediaQualityParameterValue?.maximumOutboundRoundTripDelay ;
        this.mediaDuration = teleconferenceDeviceMediaQualityParameterValue?.mediaDuration ;
        this.networkLinkSpeedInBytes = teleconferenceDeviceMediaQualityParameterValue?.networkLinkSpeedInBytes ;
        this.outboundPackets = teleconferenceDeviceMediaQualityParameterValue?.outboundPackets ;
        this.remoteIPAddress = teleconferenceDeviceMediaQualityParameterValue?.remoteIPAddress ;
        this.remotePort = teleconferenceDeviceMediaQualityParameterValue?.remotePort ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "averageInboundJitter": n => { this.averageInboundJitter = n.getDurationValue(); },
            "averageInboundPacketLossRateInPercentage": n => { this.averageInboundPacketLossRateInPercentage = n.getNumberValue(); },
            "averageInboundRoundTripDelay": n => { this.averageInboundRoundTripDelay = n.getDurationValue(); },
            "averageOutboundJitter": n => { this.averageOutboundJitter = n.getDurationValue(); },
            "averageOutboundPacketLossRateInPercentage": n => { this.averageOutboundPacketLossRateInPercentage = n.getNumberValue(); },
            "averageOutboundRoundTripDelay": n => { this.averageOutboundRoundTripDelay = n.getDurationValue(); },
            "channelIndex": n => { this.channelIndex = n.getNumberValue(); },
            "inboundPackets": n => { this.inboundPackets = n.getNumberValue(); },
            "localIPAddress": n => { this.localIPAddress = n.getStringValue(); },
            "localPort": n => { this.localPort = n.getNumberValue(); },
            "maximumInboundJitter": n => { this.maximumInboundJitter = n.getDurationValue(); },
            "maximumInboundPacketLossRateInPercentage": n => { this.maximumInboundPacketLossRateInPercentage = n.getNumberValue(); },
            "maximumInboundRoundTripDelay": n => { this.maximumInboundRoundTripDelay = n.getDurationValue(); },
            "maximumOutboundJitter": n => { this.maximumOutboundJitter = n.getDurationValue(); },
            "maximumOutboundPacketLossRateInPercentage": n => { this.maximumOutboundPacketLossRateInPercentage = n.getNumberValue(); },
            "maximumOutboundRoundTripDelay": n => { this.maximumOutboundRoundTripDelay = n.getDurationValue(); },
            "mediaDuration": n => { this.mediaDuration = n.getDurationValue(); },
            "networkLinkSpeedInBytes": n => { this.networkLinkSpeedInBytes = n.getNumberValue(); },
            "outboundPackets": n => { this.outboundPackets = n.getNumberValue(); },
            "remoteIPAddress": n => { this.remoteIPAddress = n.getStringValue(); },
            "remotePort": n => { this.remotePort = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.averageInboundJitter){
        writer.writeDurationValue("averageInboundJitter", this.averageInboundJitter);
        }
        if(this.averageInboundPacketLossRateInPercentage){
        writer.writeNumberValue("averageInboundPacketLossRateInPercentage", this.averageInboundPacketLossRateInPercentage);
        }
        if(this.averageInboundRoundTripDelay){
        writer.writeDurationValue("averageInboundRoundTripDelay", this.averageInboundRoundTripDelay);
        }
        if(this.averageOutboundJitter){
        writer.writeDurationValue("averageOutboundJitter", this.averageOutboundJitter);
        }
        if(this.averageOutboundPacketLossRateInPercentage){
        writer.writeNumberValue("averageOutboundPacketLossRateInPercentage", this.averageOutboundPacketLossRateInPercentage);
        }
        if(this.averageOutboundRoundTripDelay){
        writer.writeDurationValue("averageOutboundRoundTripDelay", this.averageOutboundRoundTripDelay);
        }
        if(this.channelIndex){
        writer.writeNumberValue("channelIndex", this.channelIndex);
        }
        if(this.inboundPackets){
        writer.writeNumberValue("inboundPackets", this.inboundPackets);
        }
        if(this.localIPAddress){
        writer.writeStringValue("localIPAddress", this.localIPAddress);
        }
        if(this.localPort){
        writer.writeNumberValue("localPort", this.localPort);
        }
        if(this.maximumInboundJitter){
        writer.writeDurationValue("maximumInboundJitter", this.maximumInboundJitter);
        }
        if(this.maximumInboundPacketLossRateInPercentage){
        writer.writeNumberValue("maximumInboundPacketLossRateInPercentage", this.maximumInboundPacketLossRateInPercentage);
        }
        if(this.maximumInboundRoundTripDelay){
        writer.writeDurationValue("maximumInboundRoundTripDelay", this.maximumInboundRoundTripDelay);
        }
        if(this.maximumOutboundJitter){
        writer.writeDurationValue("maximumOutboundJitter", this.maximumOutboundJitter);
        }
        if(this.maximumOutboundPacketLossRateInPercentage){
        writer.writeNumberValue("maximumOutboundPacketLossRateInPercentage", this.maximumOutboundPacketLossRateInPercentage);
        }
        if(this.maximumOutboundRoundTripDelay){
        writer.writeDurationValue("maximumOutboundRoundTripDelay", this.maximumOutboundRoundTripDelay);
        }
        if(this.mediaDuration){
        writer.writeDurationValue("mediaDuration", this.mediaDuration);
        }
        if(this.networkLinkSpeedInBytes){
        writer.writeNumberValue("networkLinkSpeedInBytes", this.networkLinkSpeedInBytes);
        }
        if(this.outboundPackets){
        writer.writeNumberValue("outboundPackets", this.outboundPackets);
        }
        if(this.remoteIPAddress){
        writer.writeStringValue("remoteIPAddress", this.remoteIPAddress);
        }
        if(this.remotePort){
        writer.writeNumberValue("remotePort", this.remotePort);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
