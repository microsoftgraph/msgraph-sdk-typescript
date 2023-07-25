import {deserializeIntoKubernetesControllerEvidence} from './deserializeIntoKubernetesControllerEvidence';
import {KubernetesControllerEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKubernetesControllerEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKubernetesControllerEvidence;
}
