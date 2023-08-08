import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {Relation} from './relation';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface RelationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Relation[] | undefined;
}
