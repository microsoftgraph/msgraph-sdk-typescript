import {DeviceInfo} from './deviceInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceInfo(writer: SerializationWriter, deviceInfo: DeviceInfo | undefined = {} as DeviceInfo) : void {
        writer.writeStringValue("captureDeviceDriver", deviceInfo.captureDeviceDriver);
        writer.writeStringValue("captureDeviceName", deviceInfo.captureDeviceName);
        writer.writeNumberValue("captureNotFunctioningEventRatio", deviceInfo.captureNotFunctioningEventRatio);
        writer.writeNumberValue("cpuInsufficentEventRatio", deviceInfo.cpuInsufficentEventRatio);
        writer.writeNumberValue("deviceClippingEventRatio", deviceInfo.deviceClippingEventRatio);
        writer.writeNumberValue("deviceGlitchEventRatio", deviceInfo.deviceGlitchEventRatio);
        writer.writeNumberValue("howlingEventCount", deviceInfo.howlingEventCount);
        writer.writeNumberValue("initialSignalLevelRootMeanSquare", deviceInfo.initialSignalLevelRootMeanSquare);
        writer.writeNumberValue("lowSpeechLevelEventRatio", deviceInfo.lowSpeechLevelEventRatio);
        writer.writeNumberValue("lowSpeechToNoiseEventRatio", deviceInfo.lowSpeechToNoiseEventRatio);
        writer.writeNumberValue("micGlitchRate", deviceInfo.micGlitchRate);
        writer.writeStringValue("@odata.type", deviceInfo.odataType);
        writer.writeNumberValue("receivedNoiseLevel", deviceInfo.receivedNoiseLevel);
        writer.writeNumberValue("receivedSignalLevel", deviceInfo.receivedSignalLevel);
        writer.writeStringValue("renderDeviceDriver", deviceInfo.renderDeviceDriver);
        writer.writeStringValue("renderDeviceName", deviceInfo.renderDeviceName);
        writer.writeNumberValue("renderMuteEventRatio", deviceInfo.renderMuteEventRatio);
        writer.writeNumberValue("renderNotFunctioningEventRatio", deviceInfo.renderNotFunctioningEventRatio);
        writer.writeNumberValue("renderZeroVolumeEventRatio", deviceInfo.renderZeroVolumeEventRatio);
        writer.writeNumberValue("sentNoiseLevel", deviceInfo.sentNoiseLevel);
        writer.writeNumberValue("sentSignalLevel", deviceInfo.sentSignalLevel);
        writer.writeNumberValue("speakerGlitchRate", deviceInfo.speakerGlitchRate);
        writer.writeAdditionalData(deviceInfo.additionalData);
}
