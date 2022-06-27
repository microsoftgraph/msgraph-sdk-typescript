import {IosLobAppAssignmentSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosLobAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosLobAppAssignmentSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosLobAppAssignmentSettingsImpl();
}
