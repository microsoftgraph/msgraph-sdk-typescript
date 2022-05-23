import {SubjectRightsRequest} from './subjectRightsRequest';

export interface Privacy{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The subjectRightsRequests property */
    subjectRightsRequests?:SubjectRightsRequest[] | undefined;
}
