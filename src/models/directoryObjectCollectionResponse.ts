import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type DirectoryObject } from './directoryObject';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DirectoryObjectCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DirectoryObject[] | undefined;
}
