import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewInstanceDecisionItemResource extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Display name of the resource
     */
    displayName?: string | undefined;
    /**
     * Identifier of the resource
     */
    id?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Type of resource. Types include: Group, ServicePrincipal, DirectoryRole, AzureRole, AccessPackageAssignmentPolicy.
     */
    type?: string | undefined;
}
