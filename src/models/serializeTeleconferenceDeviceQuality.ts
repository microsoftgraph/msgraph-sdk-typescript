import {serializeTeleconferenceDeviceMediaQuality} from './serializeTeleconferenceDeviceMediaQuality';
import type {TeleconferenceDeviceMediaQuality} from './teleconferenceDeviceMediaQuality';
import type {TeleconferenceDeviceQuality} from './teleconferenceDeviceQuality';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeTeleconferenceDeviceQuality(writer: SerializationWriter, teleconferenceDeviceQuality: TeleconferenceDeviceQuality | undefined = {} as TeleconferenceDeviceQuality) : void {
        writer.writeGuidValue("callChainId", teleconferenceDeviceQuality.callChainId);
        writer.writeStringValue("cloudServiceDeploymentEnvironment", teleconferenceDeviceQuality.cloudServiceDeploymentEnvironment);
        writer.writeStringValue("cloudServiceDeploymentId", teleconferenceDeviceQuality.cloudServiceDeploymentId);
        writer.writeStringValue("cloudServiceInstanceName", teleconferenceDeviceQuality.cloudServiceInstanceName);
        writer.writeStringValue("cloudServiceName", teleconferenceDeviceQuality.cloudServiceName);
        writer.writeStringValue("deviceDescription", teleconferenceDeviceQuality.deviceDescription);
        writer.writeStringValue("deviceName", teleconferenceDeviceQuality.deviceName);
        writer.writeGuidValue("mediaLegId", teleconferenceDeviceQuality.mediaLegId);
        writer.writeCollectionOfObjectValues<TeleconferenceDeviceMediaQuality>("mediaQualityList", teleconferenceDeviceQuality.mediaQualityList, serializeTeleconferenceDeviceMediaQuality);
        writer.writeStringValue("@odata.type", teleconferenceDeviceQuality.odataType);
        writer.writeGuidValue("participantId", teleconferenceDeviceQuality.participantId);
        writer.writeAdditionalData(teleconferenceDeviceQuality.additionalData);
}
