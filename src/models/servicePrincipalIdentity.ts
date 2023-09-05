import { type Identity } from './identity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ServicePrincipalIdentity extends Identity, Parsable {
    /**
     * The application identifier of the service principal.
     */
    appId?: string | undefined;
}
