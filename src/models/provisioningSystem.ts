import {DetailsInfo} from './detailsInfo';
import {Identity} from './identity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisioningSystem extends Identity, Parsable {
    /**
     * Details of the system.
     */
    details?: DetailsInfo | undefined;
}
