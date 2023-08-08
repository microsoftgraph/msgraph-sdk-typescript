import {SensitivityLabelAssignmentMethod} from './sensitivityLabelAssignmentMethod';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SensitivityLabelAssignment extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The assignmentMethod property
     */
    assignmentMethod?: SensitivityLabelAssignmentMethod | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The unique identifier for the sensitivity label assigned to the file.
     */
    sensitivityLabelId?: string | undefined;
    /**
     * The unique identifier for the tenant that hosts the file when this label is applied.
     */
    tenantId?: string | undefined;
}
