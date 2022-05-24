import {DetailsInfo} from './detailsInfo';
import {Identity} from './identity';

export interface ProvisioningSystem extends Identity{
    /** Details of the system. */
    details?:DetailsInfo | undefined;
}
