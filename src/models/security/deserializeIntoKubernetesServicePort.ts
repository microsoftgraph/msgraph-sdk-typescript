import {ContainerPortProtocol} from './containerPortProtocol';
import {KubernetesServicePort} from './kubernetesServicePort';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoKubernetesServicePort(kubernetesServicePort: KubernetesServicePort | undefined = {} as KubernetesServicePort) : Record<string, (node: ParseNode) => void> {
    return {
        "appProtocol": n => { kubernetesServicePort.appProtocol = n.getStringValue(); },
        "name": n => { kubernetesServicePort.name = n.getStringValue(); },
        "nodePort": n => { kubernetesServicePort.nodePort = n.getNumberValue(); },
        "@odata.type": n => { kubernetesServicePort.odataType = n.getStringValue(); },
        "port": n => { kubernetesServicePort.port = n.getNumberValue(); },
        "protocol": n => { kubernetesServicePort.protocol = n.getEnumValue<ContainerPortProtocol>(ContainerPortProtocol); },
        "targetPort": n => { kubernetesServicePort.targetPort = n.getStringValue(); },
    }
}
