import {RedirectUriSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRedirectUriSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : RedirectUriSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RedirectUriSettings();
}
