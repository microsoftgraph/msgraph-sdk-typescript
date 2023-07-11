import {AuditProperty} from './auditProperty';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AuditResource extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Audit resource's type.
     */
    auditResourceType?: string | undefined;
    /**
     * Display name.
     */
    displayName?: string | undefined;
    /**
     * List of modified properties.
     */
    modifiedProperties?: AuditProperty[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Audit resource's Id.
     */
    resourceId?: string | undefined;
}
