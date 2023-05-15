import {TeleconferenceDeviceMediaQuality} from './teleconferenceDeviceMediaQuality';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeleconferenceDeviceMediaQuality(writer: SerializationWriter, teleconferenceDeviceMediaQuality: TeleconferenceDeviceMediaQuality | undefined = {} as TeleconferenceDeviceMediaQuality) : void {
        writer.writeDurationValue("averageInboundJitter", teleconferenceDeviceMediaQuality.averageInboundJitter);
        writer.writeNumberValue("averageInboundPacketLossRateInPercentage", teleconferenceDeviceMediaQuality.averageInboundPacketLossRateInPercentage);
        writer.writeDurationValue("averageInboundRoundTripDelay", teleconferenceDeviceMediaQuality.averageInboundRoundTripDelay);
        writer.writeDurationValue("averageOutboundJitter", teleconferenceDeviceMediaQuality.averageOutboundJitter);
        writer.writeNumberValue("averageOutboundPacketLossRateInPercentage", teleconferenceDeviceMediaQuality.averageOutboundPacketLossRateInPercentage);
        writer.writeDurationValue("averageOutboundRoundTripDelay", teleconferenceDeviceMediaQuality.averageOutboundRoundTripDelay);
        writer.writeNumberValue("channelIndex", teleconferenceDeviceMediaQuality.channelIndex);
        writer.writeNumberValue("inboundPackets", teleconferenceDeviceMediaQuality.inboundPackets);
        writer.writeStringValue("localIPAddress", teleconferenceDeviceMediaQuality.localIPAddress);
        writer.writeNumberValue("localPort", teleconferenceDeviceMediaQuality.localPort);
        writer.writeDurationValue("maximumInboundJitter", teleconferenceDeviceMediaQuality.maximumInboundJitter);
        writer.writeNumberValue("maximumInboundPacketLossRateInPercentage", teleconferenceDeviceMediaQuality.maximumInboundPacketLossRateInPercentage);
        writer.writeDurationValue("maximumInboundRoundTripDelay", teleconferenceDeviceMediaQuality.maximumInboundRoundTripDelay);
        writer.writeDurationValue("maximumOutboundJitter", teleconferenceDeviceMediaQuality.maximumOutboundJitter);
        writer.writeNumberValue("maximumOutboundPacketLossRateInPercentage", teleconferenceDeviceMediaQuality.maximumOutboundPacketLossRateInPercentage);
        writer.writeDurationValue("maximumOutboundRoundTripDelay", teleconferenceDeviceMediaQuality.maximumOutboundRoundTripDelay);
        writer.writeDurationValue("mediaDuration", teleconferenceDeviceMediaQuality.mediaDuration);
        writer.writeNumberValue("networkLinkSpeedInBytes", teleconferenceDeviceMediaQuality.networkLinkSpeedInBytes);
        writer.writeStringValue("@odata.type", teleconferenceDeviceMediaQuality.odataType);
        writer.writeNumberValue("outboundPackets", teleconferenceDeviceMediaQuality.outboundPackets);
        writer.writeStringValue("remoteIPAddress", teleconferenceDeviceMediaQuality.remoteIPAddress);
        writer.writeNumberValue("remotePort", teleconferenceDeviceMediaQuality.remotePort);
        writer.writeAdditionalData(teleconferenceDeviceMediaQuality.additionalData);
}
