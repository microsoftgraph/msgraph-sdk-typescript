import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ConditionalAccessTemplate} from './conditionalAccessTemplate';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ConditionalAccessTemplate[] | undefined;
}
