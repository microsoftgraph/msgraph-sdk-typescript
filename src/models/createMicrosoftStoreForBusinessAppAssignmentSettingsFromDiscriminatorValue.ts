import {MicrosoftStoreForBusinessAppAssignmentSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMicrosoftStoreForBusinessAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : MicrosoftStoreForBusinessAppAssignmentSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MicrosoftStoreForBusinessAppAssignmentSettingsImpl();
}
