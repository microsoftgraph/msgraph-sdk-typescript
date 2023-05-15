import {RemoteAssistanceOnboardingStatus} from './remoteAssistanceOnboardingStatus';
import {RemoteAssistancePartner} from './remoteAssistancePartner';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemoteAssistancePartner(writer: SerializationWriter, remoteAssistancePartner: RemoteAssistancePartner | undefined = {} as RemoteAssistancePartner) : void {
        serializeEntity(writer, remoteAssistancePartner)
        writer.writeStringValue("displayName", remoteAssistancePartner.displayName);
        writer.writeDateValue("lastConnectionDateTime", remoteAssistancePartner.lastConnectionDateTime);
        writer.writeEnumValue<RemoteAssistanceOnboardingStatus>("onboardingStatus", remoteAssistancePartner.onboardingStatus);
        writer.writeStringValue("onboardingUrl", remoteAssistancePartner.onboardingUrl);
}
