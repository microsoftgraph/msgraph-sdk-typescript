import {AccessPackageAutomaticRequestSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAutomaticRequestSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAutomaticRequestSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAutomaticRequestSettings();
}
