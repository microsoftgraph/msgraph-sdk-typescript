import { deserializeIntoKubernetesPodEvidence } from './deserializeIntoKubernetesPodEvidence';
import { type KubernetesPodEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createKubernetesPodEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKubernetesPodEvidence;
}
