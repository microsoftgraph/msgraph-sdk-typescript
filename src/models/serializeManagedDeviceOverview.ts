import {DeviceExchangeAccessStateSummary} from './deviceExchangeAccessStateSummary';
import {DeviceOperatingSystemSummary} from './deviceOperatingSystemSummary';
import {ManagedDeviceOverview} from './managedDeviceOverview';
import {serializeDeviceExchangeAccessStateSummary} from './serializeDeviceExchangeAccessStateSummary';
import {serializeDeviceOperatingSystemSummary} from './serializeDeviceOperatingSystemSummary';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceOverview(managedDeviceOverview: ManagedDeviceOverview | undefined = {} as ManagedDeviceOverview, writer: SerializationWriter) : void {
        serializeEntity(writer, managedDeviceOverview)
        writer.writeObjectValue<DeviceExchangeAccessStateSummary>("deviceExchangeAccessStateSummary", managedDeviceOverview.deviceExchangeAccessStateSummary, serializeDeviceExchangeAccessStateSummary);
        writer.writeObjectValue<DeviceOperatingSystemSummary>("deviceOperatingSystemSummary", managedDeviceOverview.deviceOperatingSystemSummary, serializeDeviceOperatingSystemSummary);
        writer.writeNumberValue("dualEnrolledDeviceCount", managedDeviceOverview.dualEnrolledDeviceCount);
        writer.writeNumberValue("enrolledDeviceCount", managedDeviceOverview.enrolledDeviceCount);
        writer.writeNumberValue("mdmEnrolledCount", managedDeviceOverview.mdmEnrolledCount);
}
