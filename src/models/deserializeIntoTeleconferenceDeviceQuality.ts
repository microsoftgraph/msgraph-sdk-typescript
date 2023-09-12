import { createTeleconferenceDeviceMediaQualityFromDiscriminatorValue } from './createTeleconferenceDeviceMediaQualityFromDiscriminatorValue';
import { serializeTeleconferenceDeviceMediaQuality } from './serializeTeleconferenceDeviceMediaQuality';
import { type TeleconferenceDeviceMediaQuality } from './teleconferenceDeviceMediaQuality';
import { type TeleconferenceDeviceQuality } from './teleconferenceDeviceQuality';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function deserializeIntoTeleconferenceDeviceQuality(teleconferenceDeviceQuality: TeleconferenceDeviceQuality | undefined = {} as TeleconferenceDeviceQuality) : Record<string, (node: ParseNode) => void> {
    return {
        "callChainId": n => { teleconferenceDeviceQuality.callChainId = n.getGuidValue(); },
        "cloudServiceDeploymentEnvironment": n => { teleconferenceDeviceQuality.cloudServiceDeploymentEnvironment = n.getStringValue(); },
        "cloudServiceDeploymentId": n => { teleconferenceDeviceQuality.cloudServiceDeploymentId = n.getStringValue(); },
        "cloudServiceInstanceName": n => { teleconferenceDeviceQuality.cloudServiceInstanceName = n.getStringValue(); },
        "cloudServiceName": n => { teleconferenceDeviceQuality.cloudServiceName = n.getStringValue(); },
        "deviceDescription": n => { teleconferenceDeviceQuality.deviceDescription = n.getStringValue(); },
        "deviceName": n => { teleconferenceDeviceQuality.deviceName = n.getStringValue(); },
        "mediaLegId": n => { teleconferenceDeviceQuality.mediaLegId = n.getGuidValue(); },
        "mediaQualityList": n => { teleconferenceDeviceQuality.mediaQualityList = n.getCollectionOfObjectValues<TeleconferenceDeviceMediaQuality>(createTeleconferenceDeviceMediaQualityFromDiscriminatorValue); },
        "@odata.type": n => { teleconferenceDeviceQuality.odataType = n.getStringValue(); },
        "participantId": n => { teleconferenceDeviceQuality.participantId = n.getGuidValue(); },
    }
}
