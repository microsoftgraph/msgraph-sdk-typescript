import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminServiceManagementDetail extends Entity, Parsable {
    /**
     * The URL of the management portal for the managed service. Read-only.
     */
    serviceManagementUrl?: string | undefined;
    /**
     * The name of a managed service. Read-only.
     */
    serviceName?: string | undefined;
}
