import { deserializeIntoSettingStateDeviceSummaryCollectionResponse } from './deserializeIntoSettingStateDeviceSummaryCollectionResponse';
import { type SettingStateDeviceSummaryCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSettingStateDeviceSummaryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSettingStateDeviceSummaryCollectionResponse;
}
