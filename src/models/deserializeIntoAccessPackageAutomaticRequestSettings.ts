import { type AccessPackageAutomaticRequestSettings } from './accessPackageAutomaticRequestSettings';
import { Duration, type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAutomaticRequestSettings(accessPackageAutomaticRequestSettings: AccessPackageAutomaticRequestSettings | undefined = {} as AccessPackageAutomaticRequestSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "gracePeriodBeforeAccessRemoval": n => { accessPackageAutomaticRequestSettings.gracePeriodBeforeAccessRemoval = n.getDurationValue(); },
        "@odata.type": n => { accessPackageAutomaticRequestSettings.odataType = n.getStringValue(); },
        "removeAccessWhenTargetLeavesAllowedTargets": n => { accessPackageAutomaticRequestSettings.removeAccessWhenTargetLeavesAllowedTargets = n.getBooleanValue(); },
        "requestAccessForAllowedTargets": n => { accessPackageAutomaticRequestSettings.requestAccessForAllowedTargets = n.getBooleanValue(); },
    }
}
