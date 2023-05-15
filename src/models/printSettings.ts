import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintSettings extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Specifies whether document conversion is enabled for the tenant. If document conversion is enabled, Universal Print service will automatically convert documents into a format compatible with the printer (xps to pdf) when needed. */
    documentConversionEnabled?: boolean | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
}
