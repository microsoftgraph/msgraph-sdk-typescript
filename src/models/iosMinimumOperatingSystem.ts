import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IosMinimumOperatingSystem extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * When TRUE, only Version 10.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     */
    v10_0?: boolean | undefined;
    /**
     * When TRUE, only Version 11.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     */
    v11_0?: boolean | undefined;
    /**
     * When TRUE, only Version 12.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     */
    v12_0?: boolean | undefined;
    /**
     * When TRUE, only Version 13.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     */
    v13_0?: boolean | undefined;
    /**
     * When TRUE, only Version 14.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     */
    v14_0?: boolean | undefined;
    /**
     * When TRUE, only Version 15.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     */
    v15_0?: boolean | undefined;
    /**
     * When TRUE, only Version 8.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     */
    v8_0?: boolean | undefined;
    /**
     * When TRUE, only Version 9.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     */
    v9_0?: boolean | undefined;
}
