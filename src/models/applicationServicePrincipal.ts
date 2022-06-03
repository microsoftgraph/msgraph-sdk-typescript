import {Application} from './application';
import {ServicePrincipal} from './servicePrincipal';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ApplicationServicePrincipal extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The application property */
    application?: Application | undefined;
    /** The servicePrincipal property */
    servicePrincipal?: ServicePrincipal | undefined;
}
