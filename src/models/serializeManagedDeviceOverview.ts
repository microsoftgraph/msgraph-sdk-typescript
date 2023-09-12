import { type DeviceExchangeAccessStateSummary } from './deviceExchangeAccessStateSummary';
import { type DeviceOperatingSystemSummary } from './deviceOperatingSystemSummary';
import { type ManagedDeviceOverview } from './managedDeviceOverview';
import { serializeDeviceExchangeAccessStateSummary } from './serializeDeviceExchangeAccessStateSummary';
import { serializeDeviceOperatingSystemSummary } from './serializeDeviceOperatingSystemSummary';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceOverview(writer: SerializationWriter, managedDeviceOverview: ManagedDeviceOverview | undefined = {} as ManagedDeviceOverview) : void {
        serializeEntity(writer, managedDeviceOverview)
        writer.writeObjectValue<DeviceExchangeAccessStateSummary>("deviceExchangeAccessStateSummary", managedDeviceOverview.deviceExchangeAccessStateSummary, serializeDeviceExchangeAccessStateSummary);
        writer.writeObjectValue<DeviceOperatingSystemSummary>("deviceOperatingSystemSummary", managedDeviceOverview.deviceOperatingSystemSummary, serializeDeviceOperatingSystemSummary);
        writer.writeNumberValue("dualEnrolledDeviceCount", managedDeviceOverview.dualEnrolledDeviceCount);
        writer.writeNumberValue("enrolledDeviceCount", managedDeviceOverview.enrolledDeviceCount);
        writer.writeNumberValue("mdmEnrolledCount", managedDeviceOverview.mdmEnrolledCount);
}
