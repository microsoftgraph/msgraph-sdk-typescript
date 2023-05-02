import {createDeviceExchangeAccessStateSummaryFromDiscriminatorValue} from './createDeviceExchangeAccessStateSummaryFromDiscriminatorValue';
import {createDeviceOperatingSystemSummaryFromDiscriminatorValue} from './createDeviceOperatingSystemSummaryFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceExchangeAccessStateSummary} from './deviceExchangeAccessStateSummary';
import {DeviceOperatingSystemSummary} from './deviceOperatingSystemSummary';
import {ManagedDeviceOverview} from './managedDeviceOverview';
import {serializeDeviceExchangeAccessStateSummary} from './serializeDeviceExchangeAccessStateSummary';
import {serializeDeviceOperatingSystemSummary} from './serializeDeviceOperatingSystemSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
