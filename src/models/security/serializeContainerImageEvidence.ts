import {ContainerImageEvidence} from './containerImageEvidence';
import {ContainerRegistryEvidence} from './containerRegistryEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {serializeContainerRegistryEvidence} from './serializeContainerRegistryEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContainerImageEvidence(writer: SerializationWriter, containerImageEvidence: ContainerImageEvidence | undefined = {} as ContainerImageEvidence) : void {
        serializeAlertEvidence(writer, containerImageEvidence)
        writer.writeObjectValue<ContainerImageEvidence>("digestImage", containerImageEvidence.digestImage, serializeContainerImageEvidence);
        writer.writeStringValue("imageId", containerImageEvidence.imageId);
        writer.writeObjectValue<ContainerRegistryEvidence>("registry", containerImageEvidence.registry, serializeContainerRegistryEvidence);
}
