import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DeviceComplianceScheduledActionForRule} from './deviceComplianceScheduledActionForRule';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceScheduledActionForRuleCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: DeviceComplianceScheduledActionForRule[] | undefined;
}
