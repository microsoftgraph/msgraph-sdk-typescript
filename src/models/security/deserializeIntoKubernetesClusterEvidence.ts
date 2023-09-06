import { type AlertEvidence } from './alertEvidence';
import { createAlertEvidenceFromDiscriminatorValue } from './createAlertEvidenceFromDiscriminatorValue';
import { deserializeIntoAlertEvidence } from './deserializeIntoAlertEvidence';
import { type KubernetesClusterEvidence } from './kubernetesClusterEvidence';
import { KubernetesPlatform } from './kubernetesPlatform';
import { serializeAlertEvidence } from './serializeAlertEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoKubernetesClusterEvidence(kubernetesClusterEvidence: KubernetesClusterEvidence | undefined = {} as KubernetesClusterEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(kubernetesClusterEvidence),
        "cloudResource": n => { kubernetesClusterEvidence.cloudResource = n.getObjectValue<AlertEvidence>(createAlertEvidenceFromDiscriminatorValue); },
        "distribution": n => { kubernetesClusterEvidence.distribution = n.getStringValue(); },
        "name": n => { kubernetesClusterEvidence.name = n.getStringValue(); },
        "platform": n => { kubernetesClusterEvidence.platform = n.getEnumValue<KubernetesPlatform>(KubernetesPlatform); },
        "version": n => { kubernetesClusterEvidence.version = n.getStringValue(); },
    }
}
