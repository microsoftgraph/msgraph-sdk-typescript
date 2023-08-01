import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {RiskyServicePrincipal} from './riskyServicePrincipal';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RiskyServicePrincipalCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RiskyServicePrincipal[] | undefined;
}
