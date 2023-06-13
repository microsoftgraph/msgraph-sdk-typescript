import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import {GoogleCloudLocationType} from './googleCloudLocationType';
import {GoogleCloudResourceEvidence} from './googleCloudResourceEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGoogleCloudResourceEvidence(googleCloudResourceEvidence: GoogleCloudResourceEvidence | undefined = {} as GoogleCloudResourceEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(googleCloudResourceEvidence),
        "location": n => { googleCloudResourceEvidence.location = n.getStringValue(); },
        "locationType": n => { googleCloudResourceEvidence.locationType = n.getEnumValue<GoogleCloudLocationType>(GoogleCloudLocationType); },
        "projectId": n => { googleCloudResourceEvidence.projectId = n.getStringValue(); },
        "projectNumber": n => { googleCloudResourceEvidence.projectNumber = n.getNumberValue(); },
        "resourceName": n => { googleCloudResourceEvidence.resourceName = n.getStringValue(); },
        "resourceType": n => { googleCloudResourceEvidence.resourceType = n.getStringValue(); },
    }
}
