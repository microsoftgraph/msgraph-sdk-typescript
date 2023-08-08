import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DirectoryRole} from './directoryRole';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryRoleCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DirectoryRole[] | undefined;
}
