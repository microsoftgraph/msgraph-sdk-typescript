import {deserializeIntoKubernetesNamespaceEvidence} from './deserializeIntoKubernetesNamespaceEvidence';
import {KubernetesNamespaceEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKubernetesNamespaceEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKubernetesNamespaceEvidence;
}
