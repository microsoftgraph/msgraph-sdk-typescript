import { ContainerPortProtocol } from './containerPortProtocol';
import { type KubernetesServicePort } from './kubernetesServicePort';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeKubernetesServicePort(writer: SerializationWriter, kubernetesServicePort: KubernetesServicePort | undefined = {} as KubernetesServicePort) : void {
        writer.writeStringValue("appProtocol", kubernetesServicePort.appProtocol);
        writer.writeStringValue("name", kubernetesServicePort.name);
        writer.writeNumberValue("nodePort", kubernetesServicePort.nodePort);
        writer.writeStringValue("@odata.type", kubernetesServicePort.odataType);
        writer.writeNumberValue("port", kubernetesServicePort.port);
        writer.writeEnumValue<ContainerPortProtocol>("protocol", kubernetesServicePort.protocol);
        writer.writeStringValue("targetPort", kubernetesServicePort.targetPort);
        writer.writeAdditionalData(kubernetesServicePort.additionalData);
}
