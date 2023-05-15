import {DeviceInfo} from './deviceInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceInfo(deviceInfo: DeviceInfo | undefined = {} as DeviceInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "captureDeviceDriver": n => { deviceInfo.captureDeviceDriver = n.getStringValue(); },
        "captureDeviceName": n => { deviceInfo.captureDeviceName = n.getStringValue(); },
        "captureNotFunctioningEventRatio": n => { deviceInfo.captureNotFunctioningEventRatio = n.getNumberValue(); },
        "cpuInsufficentEventRatio": n => { deviceInfo.cpuInsufficentEventRatio = n.getNumberValue(); },
        "deviceClippingEventRatio": n => { deviceInfo.deviceClippingEventRatio = n.getNumberValue(); },
        "deviceGlitchEventRatio": n => { deviceInfo.deviceGlitchEventRatio = n.getNumberValue(); },
        "howlingEventCount": n => { deviceInfo.howlingEventCount = n.getNumberValue(); },
        "initialSignalLevelRootMeanSquare": n => { deviceInfo.initialSignalLevelRootMeanSquare = n.getNumberValue(); },
        "lowSpeechLevelEventRatio": n => { deviceInfo.lowSpeechLevelEventRatio = n.getNumberValue(); },
        "lowSpeechToNoiseEventRatio": n => { deviceInfo.lowSpeechToNoiseEventRatio = n.getNumberValue(); },
        "micGlitchRate": n => { deviceInfo.micGlitchRate = n.getNumberValue(); },
        "@odata.type": n => { deviceInfo.odataType = n.getStringValue(); },
        "receivedNoiseLevel": n => { deviceInfo.receivedNoiseLevel = n.getNumberValue(); },
        "receivedSignalLevel": n => { deviceInfo.receivedSignalLevel = n.getNumberValue(); },
        "renderDeviceDriver": n => { deviceInfo.renderDeviceDriver = n.getStringValue(); },
        "renderDeviceName": n => { deviceInfo.renderDeviceName = n.getStringValue(); },
        "renderMuteEventRatio": n => { deviceInfo.renderMuteEventRatio = n.getNumberValue(); },
        "renderNotFunctioningEventRatio": n => { deviceInfo.renderNotFunctioningEventRatio = n.getNumberValue(); },
        "renderZeroVolumeEventRatio": n => { deviceInfo.renderZeroVolumeEventRatio = n.getNumberValue(); },
        "sentNoiseLevel": n => { deviceInfo.sentNoiseLevel = n.getNumberValue(); },
        "sentSignalLevel": n => { deviceInfo.sentSignalLevel = n.getNumberValue(); },
        "speakerGlitchRate": n => { deviceInfo.speakerGlitchRate = n.getNumberValue(); },
    }
}
