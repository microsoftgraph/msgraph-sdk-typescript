import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {MailFolder} from './mailFolder';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface MailFolderCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MailFolder[] | undefined;
}
