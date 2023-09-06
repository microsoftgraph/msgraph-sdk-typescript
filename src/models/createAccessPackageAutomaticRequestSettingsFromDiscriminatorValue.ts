import { deserializeIntoAccessPackageAutomaticRequestSettings } from './deserializeIntoAccessPackageAutomaticRequestSettings';
import { type AccessPackageAutomaticRequestSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageAutomaticRequestSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAutomaticRequestSettings;
}
