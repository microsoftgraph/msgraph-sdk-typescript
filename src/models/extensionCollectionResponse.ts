import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Extension } from './extension';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ExtensionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Extension[] | undefined;
}
