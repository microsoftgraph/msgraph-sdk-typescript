import {deserializeIntoKubernetesServiceEvidence} from './deserializeIntoKubernetesServiceEvidence';
import {KubernetesServiceEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKubernetesServiceEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKubernetesServiceEvidence;
}
