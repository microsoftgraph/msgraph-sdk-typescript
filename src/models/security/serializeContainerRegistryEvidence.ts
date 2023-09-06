import { type ContainerRegistryEvidence } from './containerRegistryEvidence';
import { serializeAlertEvidence } from './serializeAlertEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeContainerRegistryEvidence(writer: SerializationWriter, containerRegistryEvidence: ContainerRegistryEvidence | undefined = {} as ContainerRegistryEvidence) : void {
        serializeAlertEvidence(writer, containerRegistryEvidence)
        writer.writeStringValue("registry", containerRegistryEvidence.registry);
}
