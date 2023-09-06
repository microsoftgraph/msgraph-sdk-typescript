import { type DetailsInfo } from './detailsInfo';
import { type Identity } from './identity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ProvisioningSystem extends Identity, Parsable {
    /**
     * Details of the system.
     */
    details?: DetailsInfo | undefined;
}
