import {ApplicationTemplate} from './applicationTemplate';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ApplicationTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ApplicationTemplate[] | undefined;
}
