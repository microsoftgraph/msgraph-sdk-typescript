import {Dictionary} from './dictionary';
import {IpEvidence} from './ipEvidence';
import {KubernetesNamespaceEvidence} from './kubernetesNamespaceEvidence';
import {KubernetesServiceEvidence} from './kubernetesServiceEvidence';
import {KubernetesServicePort} from './kubernetesServicePort';
import {KubernetesServiceType} from './kubernetesServiceType';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {serializeDictionary} from './serializeDictionary';
import {serializeIpEvidence} from './serializeIpEvidence';
import {serializeKubernetesNamespaceEvidence} from './serializeKubernetesNamespaceEvidence';
import {serializeKubernetesServicePort} from './serializeKubernetesServicePort';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKubernetesServiceEvidence(writer: SerializationWriter, kubernetesServiceEvidence: KubernetesServiceEvidence | undefined = {} as KubernetesServiceEvidence) : void {
        serializeAlertEvidence(writer, kubernetesServiceEvidence)
        writer.writeObjectValue<IpEvidence>("clusterIP", kubernetesServiceEvidence.clusterIP, serializeIpEvidence);
        writer.writeCollectionOfObjectValues<IpEvidence>("externalIPs", kubernetesServiceEvidence.externalIPs, serializeIpEvidence);
        writer.writeObjectValue<Dictionary>("labels", kubernetesServiceEvidence.labels, serializeDictionary);
        writer.writeStringValue("name", kubernetesServiceEvidence.name);
        writer.writeObjectValue<KubernetesNamespaceEvidence>("namespace", kubernetesServiceEvidence.namespace, serializeKubernetesNamespaceEvidence);
        writer.writeObjectValue<Dictionary>("selector", kubernetesServiceEvidence.selector, serializeDictionary);
        writer.writeCollectionOfObjectValues<KubernetesServicePort>("servicePorts", kubernetesServiceEvidence.servicePorts, serializeKubernetesServicePort);
        writer.writeEnumValue<KubernetesServiceType>("serviceType", kubernetesServiceEvidence.serviceType);
}
