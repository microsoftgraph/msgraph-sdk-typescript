import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {MailFolder} from './mailFolder';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MailFolderCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: MailFolder[] | undefined;
}
