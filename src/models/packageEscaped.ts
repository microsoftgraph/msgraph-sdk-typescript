import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PackageEscaped extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * A string indicating the type of package. While oneNote is the only currently defined value, you should expect other package types to be returned and handle them accordingly.
     */
    type?: string | undefined;
}
