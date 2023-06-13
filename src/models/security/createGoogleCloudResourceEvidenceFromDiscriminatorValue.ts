import {deserializeIntoGoogleCloudResourceEvidence} from './deserializeIntoGoogleCloudResourceEvidence';
import {GoogleCloudResourceEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGoogleCloudResourceEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGoogleCloudResourceEvidence;
}
