import { deserializeIntoRedundancyDetectionSettings } from './deserializeIntoRedundancyDetectionSettings';
import { type RedundancyDetectionSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRedundancyDetectionSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRedundancyDetectionSettings;
}
