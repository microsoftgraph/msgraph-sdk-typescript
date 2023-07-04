import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SearchResult extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * A callback URL that can be used to record telemetry information. The application should issue a GET on this URL if the user interacts with this item to improve the quality of results.
     */
    onClickTelemetryUrl?: string | undefined;
}
