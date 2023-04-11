import {SharepointSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharepointSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharepointSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharepointSettings();
}
