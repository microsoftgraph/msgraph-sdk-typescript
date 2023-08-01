import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {Alert} from './alert';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AlertCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Alert[] | undefined;
}
