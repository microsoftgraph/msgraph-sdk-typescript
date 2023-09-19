import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type MacOSDmgApp } from './macOSDmgApp';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface MacOSDmgAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MacOSDmgApp[] | undefined;
}
