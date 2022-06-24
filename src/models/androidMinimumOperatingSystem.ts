import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidMinimumOperatingSystem extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Version 10.0 or later. */
    v10_0?: boolean | undefined;
    /** Version 11.0 or later. */
    v11_0?: boolean | undefined;
    /** Version 4.0 or later. */
    v4_0?: boolean | undefined;
    /** Version 4.0.3 or later. */
    v4_0_3?: boolean | undefined;
    /** Version 4.1 or later. */
    v4_1?: boolean | undefined;
    /** Version 4.2 or later. */
    v4_2?: boolean | undefined;
    /** Version 4.3 or later. */
    v4_3?: boolean | undefined;
    /** Version 4.4 or later. */
    v4_4?: boolean | undefined;
    /** Version 5.0 or later. */
    v5_0?: boolean | undefined;
    /** Version 5.1 or later. */
    v5_1?: boolean | undefined;
}
