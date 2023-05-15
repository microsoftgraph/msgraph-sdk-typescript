import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {RiskyUser} from './riskyUser';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RiskyUserCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: RiskyUser[] | undefined;
}
