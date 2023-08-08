import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {Set} from './set';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface SetCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Set[] | undefined;
}
