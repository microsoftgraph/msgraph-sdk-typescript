import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Extension} from './extension';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExtensionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Extension[] | undefined;
}
