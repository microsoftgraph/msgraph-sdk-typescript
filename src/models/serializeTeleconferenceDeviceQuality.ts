import {serializeTeleconferenceDeviceMediaQuality} from './serializeTeleconferenceDeviceMediaQuality';
import {TeleconferenceDeviceMediaQuality} from './teleconferenceDeviceMediaQuality';
import {TeleconferenceDeviceQuality} from './teleconferenceDeviceQuality';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeleconferenceDeviceQuality(writer: SerializationWriter, teleconferenceDeviceQuality: TeleconferenceDeviceQuality | undefined = {} as TeleconferenceDeviceQuality) : void {
        writer.writeStringValue("callChainId", teleconferenceDeviceQuality.callChainId);
        writer.writeStringValue("cloudServiceDeploymentEnvironment", teleconferenceDeviceQuality.cloudServiceDeploymentEnvironment);
        writer.writeStringValue("cloudServiceDeploymentId", teleconferenceDeviceQuality.cloudServiceDeploymentId);
        writer.writeStringValue("cloudServiceInstanceName", teleconferenceDeviceQuality.cloudServiceInstanceName);
        writer.writeStringValue("cloudServiceName", teleconferenceDeviceQuality.cloudServiceName);
        writer.writeStringValue("deviceDescription", teleconferenceDeviceQuality.deviceDescription);
        writer.writeStringValue("deviceName", teleconferenceDeviceQuality.deviceName);
        writer.writeStringValue("mediaLegId", teleconferenceDeviceQuality.mediaLegId);
        writer.writeCollectionOfObjectValues<TeleconferenceDeviceMediaQuality>("mediaQualityList", teleconferenceDeviceQuality.mediaQualityList, serializeTeleconferenceDeviceMediaQuality);
        writer.writeStringValue("@odata.type", teleconferenceDeviceQuality.odataType);
        writer.writeStringValue("participantId", teleconferenceDeviceQuality.participantId);
        writer.writeAdditionalData(teleconferenceDeviceQuality.additionalData);
}
