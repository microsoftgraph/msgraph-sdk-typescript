import {deserializeIntoKubernetesServiceAccountEvidence} from './deserializeIntoKubernetesServiceAccountEvidence';
import {KubernetesServiceAccountEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKubernetesServiceAccountEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKubernetesServiceAccountEvidence;
}
