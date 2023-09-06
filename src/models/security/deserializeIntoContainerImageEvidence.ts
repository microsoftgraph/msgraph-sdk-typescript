import { type ContainerImageEvidence } from './containerImageEvidence';
import { type ContainerRegistryEvidence } from './containerRegistryEvidence';
import { createContainerImageEvidenceFromDiscriminatorValue } from './createContainerImageEvidenceFromDiscriminatorValue';
import { createContainerRegistryEvidenceFromDiscriminatorValue } from './createContainerRegistryEvidenceFromDiscriminatorValue';
import { deserializeIntoAlertEvidence } from './deserializeIntoAlertEvidence';
import { serializeContainerImageEvidence } from './serializeContainerImageEvidence';
import { serializeContainerRegistryEvidence } from './serializeContainerRegistryEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoContainerImageEvidence(containerImageEvidence: ContainerImageEvidence | undefined = {} as ContainerImageEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(containerImageEvidence),
        "digestImage": n => { containerImageEvidence.digestImage = n.getObjectValue<ContainerImageEvidence>(createContainerImageEvidenceFromDiscriminatorValue); },
        "imageId": n => { containerImageEvidence.imageId = n.getStringValue(); },
        "registry": n => { containerImageEvidence.registry = n.getObjectValue<ContainerRegistryEvidence>(createContainerRegistryEvidenceFromDiscriminatorValue); },
    }
}
