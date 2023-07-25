import {deserializeIntoKubernetesServicePort} from './deserializeIntoKubernetesServicePort';
import {KubernetesServicePort} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKubernetesServicePortFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKubernetesServicePort;
}
