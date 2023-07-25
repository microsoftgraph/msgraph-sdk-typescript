import {ContainerEvidence} from './containerEvidence';
import {ContainerImageEvidence} from './containerImageEvidence';
import {createContainerImageEvidenceFromDiscriminatorValue} from './createContainerImageEvidenceFromDiscriminatorValue';
import {createKubernetesPodEvidenceFromDiscriminatorValue} from './createKubernetesPodEvidenceFromDiscriminatorValue';
import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import {KubernetesPodEvidence} from './kubernetesPodEvidence';
import {serializeContainerImageEvidence} from './serializeContainerImageEvidence';
import {serializeKubernetesPodEvidence} from './serializeKubernetesPodEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContainerEvidence(containerEvidence: ContainerEvidence | undefined = {} as ContainerEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(containerEvidence),
        "args": n => { containerEvidence.args = n.getCollectionOfPrimitiveValues<string>(); },
        "command": n => { containerEvidence.command = n.getCollectionOfPrimitiveValues<string>(); },
        "containerId": n => { containerEvidence.containerId = n.getStringValue(); },
        "image": n => { containerEvidence.image = n.getObjectValue<ContainerImageEvidence>(createContainerImageEvidenceFromDiscriminatorValue); },
        "isPrivileged": n => { containerEvidence.isPrivileged = n.getBooleanValue(); },
        "name": n => { containerEvidence.name = n.getStringValue(); },
        "pod": n => { containerEvidence.pod = n.getObjectValue<KubernetesPodEvidence>(createKubernetesPodEvidenceFromDiscriminatorValue); },
    }
}
