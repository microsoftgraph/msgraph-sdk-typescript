import {UserSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserSettingsImpl();
}
