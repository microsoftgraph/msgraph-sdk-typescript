import {createTeleconferenceDeviceMediaQualityFromDiscriminatorValue} from './createTeleconferenceDeviceMediaQualityFromDiscriminatorValue';
import {serializeTeleconferenceDeviceMediaQuality} from './serializeTeleconferenceDeviceMediaQuality';
import {TeleconferenceDeviceMediaQuality} from './teleconferenceDeviceMediaQuality';
import {TeleconferenceDeviceQuality} from './teleconferenceDeviceQuality';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeleconferenceDeviceQuality(teleconferenceDeviceQuality: TeleconferenceDeviceQuality | undefined = {} as TeleconferenceDeviceQuality) : Record<string, (node: ParseNode) => void> {
    return {
        "callChainId": n => { teleconferenceDeviceQuality.callChainId = n.getStringValue(); },
        "cloudServiceDeploymentEnvironment": n => { teleconferenceDeviceQuality.cloudServiceDeploymentEnvironment = n.getStringValue(); },
        "cloudServiceDeploymentId": n => { teleconferenceDeviceQuality.cloudServiceDeploymentId = n.getStringValue(); },
        "cloudServiceInstanceName": n => { teleconferenceDeviceQuality.cloudServiceInstanceName = n.getStringValue(); },
        "cloudServiceName": n => { teleconferenceDeviceQuality.cloudServiceName = n.getStringValue(); },
        "deviceDescription": n => { teleconferenceDeviceQuality.deviceDescription = n.getStringValue(); },
        "deviceName": n => { teleconferenceDeviceQuality.deviceName = n.getStringValue(); },
        "mediaLegId": n => { teleconferenceDeviceQuality.mediaLegId = n.getStringValue(); },
        "mediaQualityList": n => { teleconferenceDeviceQuality.mediaQualityList = n.getCollectionOfObjectValues<TeleconferenceDeviceMediaQuality>(createTeleconferenceDeviceMediaQualityFromDiscriminatorValue); },
        "@odata.type": n => { teleconferenceDeviceQuality.odataType = n.getStringValue(); },
        "participantId": n => { teleconferenceDeviceQuality.participantId = n.getStringValue(); },
    }
}
