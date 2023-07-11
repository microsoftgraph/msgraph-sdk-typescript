import {SensitivityLabelAssignment} from './sensitivityLabelAssignment';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ExtractSensitivityLabelsResult extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * List of sensitivity labels assigned to a file.
     */
    labels?: SensitivityLabelAssignment[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
