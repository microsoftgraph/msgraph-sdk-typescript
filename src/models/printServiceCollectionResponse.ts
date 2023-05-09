import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {PrintService} from './printService';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintServiceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: PrintService[] | undefined;
}
