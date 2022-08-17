import {IosVppAppAssignmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosVppAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosVppAppAssignmentSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosVppAppAssignmentSettings();
}
