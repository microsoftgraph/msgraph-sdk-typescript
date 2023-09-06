import { ContainerPortProtocol } from './containerPortProtocol';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface KubernetesServicePort extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The application protocol for this port.
     */
    appProtocol?: string | undefined;
    /**
     * The name of this port within the service.
     */
    name?: string | undefined;
    /**
     * The port on each node on which this service is exposed when the type is either NodePort or LoadBalancer.
     */
    nodePort?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The port that this service exposes.
     */
    port?: number | undefined;
    /**
     * The protocol name. Possible values are: udp, tcp, sctp, unknownFutureValue.
     */
    protocol?: ContainerPortProtocol | undefined;
    /**
     * The name or number of the port to access on the pods targeted by the service. The port number must be in the range 1 to 65535. The name must be an IANASVCNAME.
     */
    targetPort?: string | undefined;
}
