import {ContainerRegistryEvidence} from './containerRegistryEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContainerRegistryEvidence(writer: SerializationWriter, containerRegistryEvidence: ContainerRegistryEvidence | undefined = {} as ContainerRegistryEvidence) : void {
        serializeAlertEvidence(writer, containerRegistryEvidence)
        writer.writeStringValue("registry", containerRegistryEvidence.registry);
}
