import { deserializeIntoSharepointSettings } from './deserializeIntoSharepointSettings';
import { type SharepointSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSharepointSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharepointSettings;
}
