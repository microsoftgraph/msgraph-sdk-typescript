import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {CustomTaskExtension} from './customTaskExtension';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface CustomTaskExtensionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CustomTaskExtension[] | undefined;
}
