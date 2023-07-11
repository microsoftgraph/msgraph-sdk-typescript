import {AudioCodec} from './audioCodec';
import {MediaStream} from './mediaStream';
import {MediaStreamDirection} from './mediaStreamDirection';
import {VideoCodec} from './videoCodec';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaStream(mediaStream: MediaStream | undefined = {} as MediaStream) : Record<string, (node: ParseNode) => void> {
    return {
        "audioCodec": n => { mediaStream.audioCodec = n.getEnumValue<AudioCodec>(AudioCodec); },
        "averageAudioDegradation": n => { mediaStream.averageAudioDegradation = n.getNumberValue(); },
        "averageAudioNetworkJitter": n => { mediaStream.averageAudioNetworkJitter = n.getDurationValue(); },
        "averageBandwidthEstimate": n => { mediaStream.averageBandwidthEstimate = n.getNumberValue(); },
        "averageFreezeDuration": n => { mediaStream.averageFreezeDuration = n.getDurationValue(); },
        "averageJitter": n => { mediaStream.averageJitter = n.getDurationValue(); },
        "averagePacketLossRate": n => { mediaStream.averagePacketLossRate = n.getNumberValue(); },
        "averageRatioOfConcealedSamples": n => { mediaStream.averageRatioOfConcealedSamples = n.getNumberValue(); },
        "averageReceivedFrameRate": n => { mediaStream.averageReceivedFrameRate = n.getNumberValue(); },
        "averageRoundTripTime": n => { mediaStream.averageRoundTripTime = n.getDurationValue(); },
        "averageVideoFrameLossPercentage": n => { mediaStream.averageVideoFrameLossPercentage = n.getNumberValue(); },
        "averageVideoFrameRate": n => { mediaStream.averageVideoFrameRate = n.getNumberValue(); },
        "averageVideoPacketLossRate": n => { mediaStream.averageVideoPacketLossRate = n.getNumberValue(); },
        "endDateTime": n => { mediaStream.endDateTime = n.getDateValue(); },
        "isAudioForwardErrorCorrectionUsed": n => { mediaStream.isAudioForwardErrorCorrectionUsed = n.getBooleanValue(); },
        "lowFrameRateRatio": n => { mediaStream.lowFrameRateRatio = n.getNumberValue(); },
        "lowVideoProcessingCapabilityRatio": n => { mediaStream.lowVideoProcessingCapabilityRatio = n.getNumberValue(); },
        "maxAudioNetworkJitter": n => { mediaStream.maxAudioNetworkJitter = n.getDurationValue(); },
        "maxJitter": n => { mediaStream.maxJitter = n.getDurationValue(); },
        "maxPacketLossRate": n => { mediaStream.maxPacketLossRate = n.getNumberValue(); },
        "maxRatioOfConcealedSamples": n => { mediaStream.maxRatioOfConcealedSamples = n.getNumberValue(); },
        "maxRoundTripTime": n => { mediaStream.maxRoundTripTime = n.getDurationValue(); },
        "@odata.type": n => { mediaStream.odataType = n.getStringValue(); },
        "packetUtilization": n => { mediaStream.packetUtilization = n.getNumberValue(); },
        "postForwardErrorCorrectionPacketLossRate": n => { mediaStream.postForwardErrorCorrectionPacketLossRate = n.getNumberValue(); },
        "rmsFreezeDuration": n => { mediaStream.rmsFreezeDuration = n.getDurationValue(); },
        "startDateTime": n => { mediaStream.startDateTime = n.getDateValue(); },
        "streamDirection": n => { mediaStream.streamDirection = n.getEnumValue<MediaStreamDirection>(MediaStreamDirection); },
        "streamId": n => { mediaStream.streamId = n.getStringValue(); },
        "videoCodec": n => { mediaStream.videoCodec = n.getEnumValue<VideoCodec>(VideoCodec); },
        "wasMediaBypassed": n => { mediaStream.wasMediaBypassed = n.getBooleanValue(); },
    }
}
