import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ContactFolder} from './contactFolder';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ContactFolderCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ContactFolder[] | undefined;
}
