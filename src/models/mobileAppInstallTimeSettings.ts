import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppInstallTimeSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The time at which the app should be installed.
     */
    deadlineDateTime?: Date | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The time at which the app should be available for installation.
     */
    startDateTime?: Date | undefined;
    /**
     * Whether the local device time or UTC time should be used when determining the available and deadline times.
     */
    useLocalTime?: boolean | undefined;
}
