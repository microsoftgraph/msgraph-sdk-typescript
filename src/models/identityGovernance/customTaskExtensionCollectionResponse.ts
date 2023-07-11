import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {CustomTaskExtension} from './customTaskExtension';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CustomTaskExtensionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CustomTaskExtension[] | undefined;
}
