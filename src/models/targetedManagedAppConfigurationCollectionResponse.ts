import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {TargetedManagedAppConfiguration} from './targetedManagedAppConfiguration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TargetedManagedAppConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TargetedManagedAppConfiguration[] | undefined;
}
