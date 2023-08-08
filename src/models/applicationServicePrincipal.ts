import type {Application} from './application';
import type {ServicePrincipal} from './servicePrincipal';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ApplicationServicePrincipal extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The application property
     */
    application?: Application | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The servicePrincipal property
     */
    servicePrincipal?: ServicePrincipal | undefined;
}
