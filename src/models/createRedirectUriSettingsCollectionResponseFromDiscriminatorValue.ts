import {RedirectUriSettingsCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRedirectUriSettingsCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RedirectUriSettingsCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RedirectUriSettingsCollectionResponse();
}
