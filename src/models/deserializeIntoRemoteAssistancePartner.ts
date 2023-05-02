import {deserializeIntoEntity} from './deserializeIntoEntity';
import {RemoteAssistanceOnboardingStatus} from './remoteAssistanceOnboardingStatus';
import {RemoteAssistancePartner} from './remoteAssistancePartner';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoteAssistancePartner(remoteAssistancePartner: RemoteAssistancePartner | undefined = {} as RemoteAssistancePartner) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(remoteAssistancePartner),
        "displayName": n => { remoteAssistancePartner.displayName = n.getStringValue(); },
        "lastConnectionDateTime": n => { remoteAssistancePartner.lastConnectionDateTime = n.getDateValue(); },
        "onboardingStatus": n => { remoteAssistancePartner.onboardingStatus = n.getEnumValue<RemoteAssistanceOnboardingStatus>(RemoteAssistanceOnboardingStatus); },
        "onboardingUrl": n => { remoteAssistancePartner.onboardingUrl = n.getStringValue(); },
    }
}
