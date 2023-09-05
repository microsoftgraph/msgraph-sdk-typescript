import { deserializeIntoKubernetesServicePort } from './deserializeIntoKubernetesServicePort';
import { type KubernetesServicePort } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createKubernetesServicePortFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKubernetesServicePort;
}
