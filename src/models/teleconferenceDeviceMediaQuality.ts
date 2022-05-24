import {Duration} from '@microsoft/kiota-abstractions';

export interface TeleconferenceDeviceMediaQuality{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The average inbound stream network jitter. */
    averageInboundJitter?:Duration | undefined;
    /** The average inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%. */
    averageInboundPacketLossRateInPercentage?:number | undefined;
    /** The average inbound stream network round trip delay. */
    averageInboundRoundTripDelay?:Duration | undefined;
    /** The average outbound stream network jitter. */
    averageOutboundJitter?:Duration | undefined;
    /** The average outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%. */
    averageOutboundPacketLossRateInPercentage?:number | undefined;
    /** The average outbound stream network round trip delay. */
    averageOutboundRoundTripDelay?:Duration | undefined;
    /** The channel index of media. Indexing begins with 1.  If a media session contains 3 video modalities, channel indexes will be 1, 2, and 3. */
    channelIndex?:number | undefined;
    /** The total number of the inbound packets. */
    inboundPackets?:number | undefined;
    /** the local IP address for the media session. */
    localIPAddress?:string | undefined;
    /** The local media port. */
    localPort?:number | undefined;
    /** The maximum inbound stream network jitter. */
    maximumInboundJitter?:Duration | undefined;
    /** The maximum inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%. */
    maximumInboundPacketLossRateInPercentage?:number | undefined;
    /** The maximum inbound stream network round trip delay. */
    maximumInboundRoundTripDelay?:Duration | undefined;
    /** The maximum outbound stream network jitter. */
    maximumOutboundJitter?:Duration | undefined;
    /** The maximum outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%. */
    maximumOutboundPacketLossRateInPercentage?:number | undefined;
    /** The maximum outbound stream network round trip delay. */
    maximumOutboundRoundTripDelay?:Duration | undefined;
    /** The total modality duration. If the media enabled and disabled multiple times, MediaDuration will the summation of all of the durations. */
    mediaDuration?:Duration | undefined;
    /** The network link speed in bytes */
    networkLinkSpeedInBytes?:number | undefined;
    /** The total number of the outbound packets. */
    outboundPackets?:number | undefined;
    /** The remote IP address for the media session. */
    remoteIPAddress?:string | undefined;
    /** The remote media port. */
    remotePort?:number | undefined;
}
