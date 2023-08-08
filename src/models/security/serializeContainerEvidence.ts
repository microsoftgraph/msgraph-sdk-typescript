import type {ContainerEvidence} from './containerEvidence';
import type {ContainerImageEvidence} from './containerImageEvidence';
import type {KubernetesPodEvidence} from './kubernetesPodEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {serializeContainerImageEvidence} from './serializeContainerImageEvidence';
import {serializeKubernetesPodEvidence} from './serializeKubernetesPodEvidence';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContainerEvidence(writer: SerializationWriter, containerEvidence: ContainerEvidence | undefined = {} as ContainerEvidence) : void {
        serializeAlertEvidence(writer, containerEvidence)
        writer.writeCollectionOfPrimitiveValues<string>("args", containerEvidence.args);
        writer.writeCollectionOfPrimitiveValues<string>("command", containerEvidence.command);
        writer.writeStringValue("containerId", containerEvidence.containerId);
        writer.writeObjectValue<ContainerImageEvidence>("image", containerEvidence.image, serializeContainerImageEvidence);
        writer.writeBooleanValue("isPrivileged", containerEvidence.isPrivileged);
        writer.writeStringValue("name", containerEvidence.name);
        writer.writeObjectValue<KubernetesPodEvidence>("pod", containerEvidence.pod, serializeKubernetesPodEvidence);
}
