import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAutomaticRequestSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The duration for which access must be retained before the target's access is revoked once they leave the allowed target scope.
     */
    gracePeriodBeforeAccessRemoval?: Duration | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Indicates whether automatic assignment must be removed for targets who move out of the allowed target scope.
     */
    removeAccessWhenTargetLeavesAllowedTargets?: boolean | undefined;
    /**
     * If set to true, automatic assignments will be created for targets in the allowed target scope.
     */
    requestAccessForAllowedTargets?: boolean | undefined;
}
