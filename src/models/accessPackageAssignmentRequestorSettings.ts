import {SubjectSet} from './subjectSet';

export interface AccessPackageAssignmentRequestorSettings{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** If false, the requestor is not permitted to include a schedule in their request. */
    allowCustomAssignmentSchedule?:boolean | undefined;
    /** If true, allows on-behalf-of requestors to create a request to add access for another principal. */
    enableOnBehalfRequestorsToAddAccess?:boolean | undefined;
    /** If true, allows on-behalf-of requestors to create a request to remove access for another principal. */
    enableOnBehalfRequestorsToRemoveAccess?:boolean | undefined;
    /** If true, allows on-behalf-of requestors to create a request to update access for another principal. */
    enableOnBehalfRequestorsToUpdateAccess?:boolean | undefined;
    /** If true, allows requestors to create a request to add access for themselves. */
    enableTargetsToSelfAddAccess?:boolean | undefined;
    /** If true, allows requestors to create a request to remove their access. */
    enableTargetsToSelfRemoveAccess?:boolean | undefined;
    /** If true, allows requestors to create a request to update their access. */
    enableTargetsToSelfUpdateAccess?:boolean | undefined;
    /** The principals who can request on-behalf-of others. */
    onBehalfRequestors?:SubjectSet[] | undefined;
}
