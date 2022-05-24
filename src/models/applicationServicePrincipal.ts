import {Application} from './application';
import {ServicePrincipal} from './servicePrincipal';

export interface ApplicationServicePrincipal{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The application property */
    application?:Application | undefined;
    /** The servicePrincipal property */
    servicePrincipal?:ServicePrincipal | undefined;
}
