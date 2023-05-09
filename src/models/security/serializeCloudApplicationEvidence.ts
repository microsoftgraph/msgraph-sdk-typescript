import {CloudApplicationEvidence} from './cloudApplicationEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCloudApplicationEvidence(writer: SerializationWriter, cloudApplicationEvidence: CloudApplicationEvidence | undefined = {} as CloudApplicationEvidence) : void {
        serializeAlertEvidence(writer, cloudApplicationEvidence)
        writer.writeNumberValue("appId", cloudApplicationEvidence.appId);
        writer.writeStringValue("displayName", cloudApplicationEvidence.displayName);
        writer.writeNumberValue("instanceId", cloudApplicationEvidence.instanceId);
        writer.writeStringValue("instanceName", cloudApplicationEvidence.instanceName);
        writer.writeNumberValue("saasAppId", cloudApplicationEvidence.saasAppId);
}
