import {DeviceComplianceScheduledActionForRule} from './deviceComplianceScheduledActionForRule';
import {DeviceComplianceScheduledActionForRuleCollectionResponse} from './deviceComplianceScheduledActionForRuleCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceComplianceScheduledActionForRule} from './serializeDeviceComplianceScheduledActionForRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceScheduledActionForRuleCollectionResponse(deviceComplianceScheduledActionForRuleCollectionResponse: DeviceComplianceScheduledActionForRuleCollectionResponse | undefined = {} as DeviceComplianceScheduledActionForRuleCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceComplianceScheduledActionForRuleCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceComplianceScheduledActionForRule>("value", deviceComplianceScheduledActionForRuleCollectionResponse.value, serializeDeviceComplianceScheduledActionForRule);
}
