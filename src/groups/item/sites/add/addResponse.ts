import {BaseCollectionPaginationCountResponse} from '../../../../models/baseCollectionPaginationCountResponse';
import {Site} from '../../../../models/site';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AddResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Site[] | undefined;
}
