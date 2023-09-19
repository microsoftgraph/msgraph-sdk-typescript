import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type WindowsWebApp } from './windowsWebApp';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface WindowsWebAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WindowsWebApp[] | undefined;
}
