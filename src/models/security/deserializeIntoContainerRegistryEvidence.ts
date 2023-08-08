import type {ContainerRegistryEvidence} from './containerRegistryEvidence';
import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContainerRegistryEvidence(containerRegistryEvidence: ContainerRegistryEvidence | undefined = {} as ContainerRegistryEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(containerRegistryEvidence),
        "registry": n => { containerRegistryEvidence.registry = n.getStringValue(); },
    }
}
