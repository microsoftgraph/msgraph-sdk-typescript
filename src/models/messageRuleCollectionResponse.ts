import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {MessageRule} from './messageRule';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MessageRuleCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MessageRule[] | undefined;
}
