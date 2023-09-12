import { deserializeIntoSettingStateDeviceSummary } from './deserializeIntoSettingStateDeviceSummary';
import { type SettingStateDeviceSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSettingStateDeviceSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSettingStateDeviceSummary;
}
