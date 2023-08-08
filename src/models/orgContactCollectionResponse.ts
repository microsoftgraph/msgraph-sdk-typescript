import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {OrgContact} from './orgContact';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface OrgContactCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OrgContact[] | undefined;
}
