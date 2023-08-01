import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DeviceComplianceScheduledActionForRule} from './deviceComplianceScheduledActionForRule';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceScheduledActionForRuleCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceComplianceScheduledActionForRule[] | undefined;
}
