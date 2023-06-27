import {SubjectSet} from './subjectSet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAssignmentRequestorSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * False indicates that the requestor is not permitted to include a schedule in their request.
     */
    allowCustomAssignmentSchedule?: boolean | undefined;
    /**
     * True allows on-behalf-of requestors to create a request to add access for another principal.
     */
    enableOnBehalfRequestorsToAddAccess?: boolean | undefined;
    /**
     * True allows on-behalf-of requestors to create a request to remove access for another principal.
     */
    enableOnBehalfRequestorsToRemoveAccess?: boolean | undefined;
    /**
     * True allows on-behalf-of requestors to create a request to update access for another principal.
     */
    enableOnBehalfRequestorsToUpdateAccess?: boolean | undefined;
    /**
     * True allows requestors to create a request to add access for themselves.
     */
    enableTargetsToSelfAddAccess?: boolean | undefined;
    /**
     * True allows requestors to create a request to remove their access.
     */
    enableTargetsToSelfRemoveAccess?: boolean | undefined;
    /**
     * True allows requestors to create a request to update their access.
     */
    enableTargetsToSelfUpdateAccess?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The principals who can request on-behalf-of others.
     */
    onBehalfRequestors?: SubjectSet[] | undefined;
}
