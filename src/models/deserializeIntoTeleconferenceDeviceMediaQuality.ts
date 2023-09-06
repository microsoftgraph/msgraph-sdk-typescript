import { type TeleconferenceDeviceMediaQuality } from './teleconferenceDeviceMediaQuality';
import { Duration, type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeleconferenceDeviceMediaQuality(teleconferenceDeviceMediaQuality: TeleconferenceDeviceMediaQuality | undefined = {} as TeleconferenceDeviceMediaQuality) : Record<string, (node: ParseNode) => void> {
    return {
        "averageInboundJitter": n => { teleconferenceDeviceMediaQuality.averageInboundJitter = n.getDurationValue(); },
        "averageInboundPacketLossRateInPercentage": n => { teleconferenceDeviceMediaQuality.averageInboundPacketLossRateInPercentage = n.getNumberValue(); },
        "averageInboundRoundTripDelay": n => { teleconferenceDeviceMediaQuality.averageInboundRoundTripDelay = n.getDurationValue(); },
        "averageOutboundJitter": n => { teleconferenceDeviceMediaQuality.averageOutboundJitter = n.getDurationValue(); },
        "averageOutboundPacketLossRateInPercentage": n => { teleconferenceDeviceMediaQuality.averageOutboundPacketLossRateInPercentage = n.getNumberValue(); },
        "averageOutboundRoundTripDelay": n => { teleconferenceDeviceMediaQuality.averageOutboundRoundTripDelay = n.getDurationValue(); },
        "channelIndex": n => { teleconferenceDeviceMediaQuality.channelIndex = n.getNumberValue(); },
        "inboundPackets": n => { teleconferenceDeviceMediaQuality.inboundPackets = n.getNumberValue(); },
        "localIPAddress": n => { teleconferenceDeviceMediaQuality.localIPAddress = n.getStringValue(); },
        "localPort": n => { teleconferenceDeviceMediaQuality.localPort = n.getNumberValue(); },
        "maximumInboundJitter": n => { teleconferenceDeviceMediaQuality.maximumInboundJitter = n.getDurationValue(); },
        "maximumInboundPacketLossRateInPercentage": n => { teleconferenceDeviceMediaQuality.maximumInboundPacketLossRateInPercentage = n.getNumberValue(); },
        "maximumInboundRoundTripDelay": n => { teleconferenceDeviceMediaQuality.maximumInboundRoundTripDelay = n.getDurationValue(); },
        "maximumOutboundJitter": n => { teleconferenceDeviceMediaQuality.maximumOutboundJitter = n.getDurationValue(); },
        "maximumOutboundPacketLossRateInPercentage": n => { teleconferenceDeviceMediaQuality.maximumOutboundPacketLossRateInPercentage = n.getNumberValue(); },
        "maximumOutboundRoundTripDelay": n => { teleconferenceDeviceMediaQuality.maximumOutboundRoundTripDelay = n.getDurationValue(); },
        "mediaDuration": n => { teleconferenceDeviceMediaQuality.mediaDuration = n.getDurationValue(); },
        "networkLinkSpeedInBytes": n => { teleconferenceDeviceMediaQuality.networkLinkSpeedInBytes = n.getNumberValue(); },
        "@odata.type": n => { teleconferenceDeviceMediaQuality.odataType = n.getStringValue(); },
        "outboundPackets": n => { teleconferenceDeviceMediaQuality.outboundPackets = n.getNumberValue(); },
        "remoteIPAddress": n => { teleconferenceDeviceMediaQuality.remoteIPAddress = n.getStringValue(); },
        "remotePort": n => { teleconferenceDeviceMediaQuality.remotePort = n.getNumberValue(); },
    }
}
