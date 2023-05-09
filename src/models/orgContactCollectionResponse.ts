import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {OrgContact} from './orgContact';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OrgContactCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: OrgContact[] | undefined;
}
