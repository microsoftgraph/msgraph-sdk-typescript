import { deserializeIntoSummarizeDevicePerformanceDevicesWithSummarizeByResponse } from './deserializeIntoSummarizeDevicePerformanceDevicesWithSummarizeByResponse';
import { type SummarizeDevicePerformanceDevicesWithSummarizeByResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSummarizeDevicePerformanceDevicesWithSummarizeByResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSummarizeDevicePerformanceDevicesWithSummarizeByResponse;
}
