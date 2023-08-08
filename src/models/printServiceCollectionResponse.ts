import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {PrintService} from './printService';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintServiceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PrintService[] | undefined;
}
