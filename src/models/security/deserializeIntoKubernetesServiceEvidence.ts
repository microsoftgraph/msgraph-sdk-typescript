import {createDictionaryFromDiscriminatorValue} from './createDictionaryFromDiscriminatorValue';
import {createIpEvidenceFromDiscriminatorValue} from './createIpEvidenceFromDiscriminatorValue';
import {createKubernetesNamespaceEvidenceFromDiscriminatorValue} from './createKubernetesNamespaceEvidenceFromDiscriminatorValue';
import {createKubernetesServicePortFromDiscriminatorValue} from './createKubernetesServicePortFromDiscriminatorValue';
import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import {Dictionary} from './dictionary';
import {IpEvidence} from './ipEvidence';
import {KubernetesNamespaceEvidence} from './kubernetesNamespaceEvidence';
import {KubernetesServiceEvidence} from './kubernetesServiceEvidence';
import {KubernetesServicePort} from './kubernetesServicePort';
import {KubernetesServiceType} from './kubernetesServiceType';
import {serializeDictionary} from './serializeDictionary';
import {serializeIpEvidence} from './serializeIpEvidence';
import {serializeKubernetesNamespaceEvidence} from './serializeKubernetesNamespaceEvidence';
import {serializeKubernetesServicePort} from './serializeKubernetesServicePort';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoKubernetesServiceEvidence(kubernetesServiceEvidence: KubernetesServiceEvidence | undefined = {} as KubernetesServiceEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(kubernetesServiceEvidence),
        "clusterIP": n => { kubernetesServiceEvidence.clusterIP = n.getObjectValue<IpEvidence>(createIpEvidenceFromDiscriminatorValue); },
        "externalIPs": n => { kubernetesServiceEvidence.externalIPs = n.getCollectionOfObjectValues<IpEvidence>(createIpEvidenceFromDiscriminatorValue); },
        "labels": n => { kubernetesServiceEvidence.labels = n.getObjectValue<Dictionary>(createDictionaryFromDiscriminatorValue); },
        "name": n => { kubernetesServiceEvidence.name = n.getStringValue(); },
        "namespace": n => { kubernetesServiceEvidence.namespace = n.getObjectValue<KubernetesNamespaceEvidence>(createKubernetesNamespaceEvidenceFromDiscriminatorValue); },
        "selector": n => { kubernetesServiceEvidence.selector = n.getObjectValue<Dictionary>(createDictionaryFromDiscriminatorValue); },
        "servicePorts": n => { kubernetesServiceEvidence.servicePorts = n.getCollectionOfObjectValues<KubernetesServicePort>(createKubernetesServicePortFromDiscriminatorValue); },
        "serviceType": n => { kubernetesServiceEvidence.serviceType = n.getEnumValue<KubernetesServiceType>(KubernetesServiceType); },
    }
}
