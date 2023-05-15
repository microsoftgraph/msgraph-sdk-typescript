import {deserializeIntoAccessPackageAutomaticRequestSettings} from './deserializeIntoAccessPackageAutomaticRequestSettings';
import {AccessPackageAutomaticRequestSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAutomaticRequestSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAutomaticRequestSettings;
}
