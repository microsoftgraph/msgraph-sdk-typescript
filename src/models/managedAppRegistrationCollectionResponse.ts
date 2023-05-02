import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ManagedAppRegistration} from './managedAppRegistration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppRegistrationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ManagedAppRegistration[] | undefined;
}
