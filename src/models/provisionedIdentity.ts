import {DetailsInfo} from './detailsInfo';
import {Identity} from './identity';

export interface ProvisionedIdentity extends Identity{
    /** Details of the identity. */
    details?:DetailsInfo | undefined;
    /** Type of identity that has been provisioned, such as 'user' or 'group'. */
    identityType?:string | undefined;
}
