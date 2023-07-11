import {SecurityResourceType} from './securityResourceType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SecurityResource extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Name of the resource that is related to current alert. Required.
     */
    resource?: string | undefined;
    /**
     * Represents type of security resources related to an alert. Possible values are: attacked, related.
     */
    resourceType?: SecurityResourceType | undefined;
}
