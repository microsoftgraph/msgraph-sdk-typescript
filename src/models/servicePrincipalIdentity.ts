import {Identity} from './identity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServicePrincipalIdentity extends Identity, Parsable {
    /**
     * The application identifier of the service principal.
     */
    appId?: string | undefined;
}
