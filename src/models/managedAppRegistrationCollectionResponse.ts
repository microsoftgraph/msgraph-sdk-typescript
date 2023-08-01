import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ManagedAppRegistration} from './managedAppRegistration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppRegistrationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedAppRegistration[] | undefined;
}
