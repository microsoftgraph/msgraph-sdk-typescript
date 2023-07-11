import {SubjectRightsRequest} from './subjectRightsRequest';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Privacy extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The subjectRightsRequests property
     */
    subjectRightsRequests?: SubjectRightsRequest[] | undefined;
}
