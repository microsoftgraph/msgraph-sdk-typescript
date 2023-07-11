import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsMinimumOperatingSystem extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Windows version 10.0 or later.
     */
    v10_0?: boolean | undefined;
    /**
     * Windows version 8.0 or later.
     */
    v8_0?: boolean | undefined;
    /**
     * Windows version 8.1 or later.
     */
    v8_1?: boolean | undefined;
}
