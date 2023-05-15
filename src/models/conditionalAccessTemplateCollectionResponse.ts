import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ConditionalAccessTemplate} from './conditionalAccessTemplate';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ConditionalAccessTemplate[] | undefined;
}
