import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type DirectoryRoleTemplate } from './directoryRoleTemplate';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DirectoryRoleTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DirectoryRoleTemplate[] | undefined;
}
