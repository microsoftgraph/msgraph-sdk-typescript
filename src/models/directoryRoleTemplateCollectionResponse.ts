import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DirectoryRoleTemplate} from './directoryRoleTemplate';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryRoleTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: DirectoryRoleTemplate[] | undefined;
}
