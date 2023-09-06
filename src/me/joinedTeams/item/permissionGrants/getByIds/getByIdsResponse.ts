import { type BaseCollectionPaginationCountResponse } from '../../../../../models/baseCollectionPaginationCountResponse';
import { type DirectoryObject } from '../../../../../models/directoryObject';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface GetByIdsResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DirectoryObject[] | undefined;
}
