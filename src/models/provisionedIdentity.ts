import {DetailsInfo} from './detailsInfo';
import {Identity} from './identity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisionedIdentity extends Identity, Parsable {
    /**
     * Details of the identity.
     */
    details?: DetailsInfo | undefined;
    /**
     * Type of identity that has been provisioned, such as 'user' or 'group'.
     */
    identityType?: string | undefined;
}
