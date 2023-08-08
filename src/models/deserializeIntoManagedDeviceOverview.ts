import {createDeviceExchangeAccessStateSummaryFromDiscriminatorValue} from './createDeviceExchangeAccessStateSummaryFromDiscriminatorValue';
import {createDeviceOperatingSystemSummaryFromDiscriminatorValue} from './createDeviceOperatingSystemSummaryFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {DeviceExchangeAccessStateSummary} from './deviceExchangeAccessStateSummary';
import type {DeviceOperatingSystemSummary} from './deviceOperatingSystemSummary';
import type {ManagedDeviceOverview} from './managedDeviceOverview';
import {serializeDeviceExchangeAccessStateSummary} from './serializeDeviceExchangeAccessStateSummary';
import {serializeDeviceOperatingSystemSummary} from './serializeDeviceOperatingSystemSummary';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceOverview(managedDeviceOverview: ManagedDeviceOverview | undefined = {} as ManagedDeviceOverview) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedDeviceOverview),
        "deviceExchangeAccessStateSummary": n => { managedDeviceOverview.deviceExchangeAccessStateSummary = n.getObjectValue<DeviceExchangeAccessStateSummary>(createDeviceExchangeAccessStateSummaryFromDiscriminatorValue); },
        "deviceOperatingSystemSummary": n => { managedDeviceOverview.deviceOperatingSystemSummary = n.getObjectValue<DeviceOperatingSystemSummary>(createDeviceOperatingSystemSummaryFromDiscriminatorValue); },
        "dualEnrolledDeviceCount": n => { managedDeviceOverview.dualEnrolledDeviceCount = n.getNumberValue(); },
        "enrolledDeviceCount": n => { managedDeviceOverview.enrolledDeviceCount = n.getNumberValue(); },
        "mdmEnrolledCount": n => { managedDeviceOverview.mdmEnrolledCount = n.getNumberValue(); },
    }
}
