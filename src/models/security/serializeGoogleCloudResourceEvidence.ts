import {GoogleCloudLocationType} from './googleCloudLocationType';
import {GoogleCloudResourceEvidence} from './googleCloudResourceEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGoogleCloudResourceEvidence(writer: SerializationWriter, googleCloudResourceEvidence: GoogleCloudResourceEvidence | undefined = {} as GoogleCloudResourceEvidence) : void {
        serializeAlertEvidence(writer, googleCloudResourceEvidence)
        writer.writeStringValue("location", googleCloudResourceEvidence.location);
        writer.writeEnumValue<GoogleCloudLocationType>("locationType", googleCloudResourceEvidence.locationType);
        writer.writeStringValue("projectId", googleCloudResourceEvidence.projectId);
        writer.writeNumberValue("projectNumber", googleCloudResourceEvidence.projectNumber);
        writer.writeStringValue("resourceName", googleCloudResourceEvidence.resourceName);
        writer.writeStringValue("resourceType", googleCloudResourceEvidence.resourceType);
}
