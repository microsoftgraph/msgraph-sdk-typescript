import {ContainerPortProtocol} from './containerPortProtocol';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface KubernetesServicePort extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The appProtocol property
     */
    appProtocol?: string | undefined;
    /**
     * The name property
     */
    name?: string | undefined;
    /**
     * The nodePort property
     */
    nodePort?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The port property
     */
    port?: number | undefined;
    /**
     * The protocol property
     */
    protocol?: ContainerPortProtocol | undefined;
    /**
     * The targetPort property
     */
    targetPort?: string | undefined;
}
