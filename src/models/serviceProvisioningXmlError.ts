import type {ServiceProvisioningError} from './serviceProvisioningError';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceProvisioningXmlError extends Parsable, ServiceProvisioningError {
    /**
     * The errorDetail property
     */
    errorDetail?: string | undefined;
}
