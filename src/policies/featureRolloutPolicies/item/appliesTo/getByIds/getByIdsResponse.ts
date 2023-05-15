import {BaseCollectionPaginationCountResponse} from '../../../../../models/baseCollectionPaginationCountResponse';
import {DirectoryObject} from '../../../../../models/directoryObject';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetByIdsResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: DirectoryObject[] | undefined;
}
