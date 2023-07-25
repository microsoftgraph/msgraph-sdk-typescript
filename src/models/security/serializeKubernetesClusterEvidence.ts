import {AlertEvidence} from './alertEvidence';
import {KubernetesClusterEvidence} from './kubernetesClusterEvidence';
import {KubernetesPlatform} from './kubernetesPlatform';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKubernetesClusterEvidence(writer: SerializationWriter, kubernetesClusterEvidence: KubernetesClusterEvidence | undefined = {} as KubernetesClusterEvidence) : void {
        serializeAlertEvidence(writer, kubernetesClusterEvidence)
        writer.writeObjectValue<AlertEvidence>("cloudResource", kubernetesClusterEvidence.cloudResource, serializeAlertEvidence);
        writer.writeStringValue("distribution", kubernetesClusterEvidence.distribution);
        writer.writeStringValue("name", kubernetesClusterEvidence.name);
        writer.writeEnumValue<KubernetesPlatform>("platform", kubernetesClusterEvidence.platform);
        writer.writeStringValue("version", kubernetesClusterEvidence.version);
}
