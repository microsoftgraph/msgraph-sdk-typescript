import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {MessageRule} from './messageRule';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface MessageRuleCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MessageRule[] | undefined;
}
