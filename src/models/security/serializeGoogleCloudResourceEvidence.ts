import { GoogleCloudLocationType } from './googleCloudLocationType';
import { type GoogleCloudResourceEvidence } from './googleCloudResourceEvidence';
import { serializeAlertEvidence } from './serializeAlertEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGoogleCloudResourceEvidence(writer: SerializationWriter, googleCloudResourceEvidence: GoogleCloudResourceEvidence | undefined = {} as GoogleCloudResourceEvidence) : void {
        serializeAlertEvidence(writer, googleCloudResourceEvidence)
        writer.writeStringValue("location", googleCloudResourceEvidence.location);
        writer.writeEnumValue<GoogleCloudLocationType>("locationType", googleCloudResourceEvidence.locationType);
        writer.writeStringValue("projectId", googleCloudResourceEvidence.projectId);
        writer.writeNumberValue("projectNumber", googleCloudResourceEvidence.projectNumber);
        writer.writeStringValue("resourceName", googleCloudResourceEvidence.resourceName);
        writer.writeStringValue("resourceType", googleCloudResourceEvidence.resourceType);
}
