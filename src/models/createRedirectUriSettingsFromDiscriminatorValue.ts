import {deserializeIntoRedirectUriSettings} from './deserializeIntoRedirectUriSettings';
import {RedirectUriSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRedirectUriSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRedirectUriSettings;
}
