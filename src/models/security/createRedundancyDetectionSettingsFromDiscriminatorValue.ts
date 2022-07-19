import {RedundancyDetectionSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRedundancyDetectionSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : RedundancyDetectionSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RedundancyDetectionSettings();
}
