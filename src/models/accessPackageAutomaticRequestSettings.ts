import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAutomaticRequestSettings extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The gracePeriodBeforeAccessRemoval property */
    gracePeriodBeforeAccessRemoval?: Duration | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The removeAccessWhenTargetLeavesAllowedTargets property */
    removeAccessWhenTargetLeavesAllowedTargets?: boolean | undefined;
    /** If set to true, automatic assignments will be created for targets in the allowed target scope. */
    requestAccessForAllowedTargets?: boolean | undefined;
}
