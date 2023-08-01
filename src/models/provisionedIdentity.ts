import type {DetailsInfo} from './detailsInfo';
import type {Identity} from './identity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisionedIdentity extends Identity, Parsable {
    /**
     * Details of the identity.
     */
    details?: DetailsInfo | undefined;
    /**
     * Type of identity that has been provisioned, such as 'user' or 'group'. Supports $filter (eq, contains).
     */
    identityType?: string | undefined;
}
