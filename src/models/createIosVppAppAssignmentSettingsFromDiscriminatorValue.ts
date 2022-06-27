import {IosVppAppAssignmentSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosVppAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosVppAppAssignmentSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosVppAppAssignmentSettingsImpl();
}
