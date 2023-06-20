import {AccessPackageAutomaticRequestSettings} from './accessPackageAutomaticRequestSettings';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAutomaticRequestSettings(accessPackageAutomaticRequestSettings: AccessPackageAutomaticRequestSettings | undefined = {} as AccessPackageAutomaticRequestSettings, writer: SerializationWriter) : void {
        writer.writeDurationValue("gracePeriodBeforeAccessRemoval", accessPackageAutomaticRequestSettings.gracePeriodBeforeAccessRemoval);
        writer.writeStringValue("@odata.type", accessPackageAutomaticRequestSettings.odataType);
        writer.writeBooleanValue("removeAccessWhenTargetLeavesAllowedTargets", accessPackageAutomaticRequestSettings.removeAccessWhenTargetLeavesAllowedTargets);
        writer.writeBooleanValue("requestAccessForAllowedTargets", accessPackageAutomaticRequestSettings.requestAccessForAllowedTargets);
        writer.writeAdditionalData(accessPackageAutomaticRequestSettings.additionalData);
}
