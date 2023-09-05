import { type AlertEvidence } from './alertEvidence';
import { type KubernetesClusterEvidence } from './kubernetesClusterEvidence';
import { KubernetesPlatform } from './kubernetesPlatform';
import { serializeAlertEvidence } from './serializeAlertEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeKubernetesClusterEvidence(writer: SerializationWriter, kubernetesClusterEvidence: KubernetesClusterEvidence | undefined = {} as KubernetesClusterEvidence) : void {
        serializeAlertEvidence(writer, kubernetesClusterEvidence)
        writer.writeObjectValue<AlertEvidence>("cloudResource", kubernetesClusterEvidence.cloudResource, serializeAlertEvidence);
        writer.writeStringValue("distribution", kubernetesClusterEvidence.distribution);
        writer.writeStringValue("name", kubernetesClusterEvidence.name);
        writer.writeEnumValue<KubernetesPlatform>("platform", kubernetesClusterEvidence.platform);
        writer.writeStringValue("version", kubernetesClusterEvidence.version);
}
