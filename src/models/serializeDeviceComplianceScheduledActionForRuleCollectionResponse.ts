import type {DeviceComplianceScheduledActionForRule} from './deviceComplianceScheduledActionForRule';
import type {DeviceComplianceScheduledActionForRuleCollectionResponse} from './deviceComplianceScheduledActionForRuleCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceComplianceScheduledActionForRule} from './serializeDeviceComplianceScheduledActionForRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceScheduledActionForRuleCollectionResponse(writer: SerializationWriter, deviceComplianceScheduledActionForRuleCollectionResponse: DeviceComplianceScheduledActionForRuleCollectionResponse | undefined = {} as DeviceComplianceScheduledActionForRuleCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceComplianceScheduledActionForRuleCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceComplianceScheduledActionForRule>("value", deviceComplianceScheduledActionForRuleCollectionResponse.value, serializeDeviceComplianceScheduledActionForRule);
}
