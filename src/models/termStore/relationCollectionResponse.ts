import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {Relation} from './relation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RelationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Relation[] | undefined;
}
