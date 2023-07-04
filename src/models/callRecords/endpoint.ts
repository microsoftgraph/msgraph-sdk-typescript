import {UserAgent} from './userAgent';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Endpoint extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * User-agent reported by this endpoint.
     */
    userAgent?: UserAgent | undefined;
}
