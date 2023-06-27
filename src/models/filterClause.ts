import {FilterOperand} from './filterOperand';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FilterClause extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The operatorName property
     */
    operatorName?: string | undefined;
    /**
     * The sourceOperandName property
     */
    sourceOperandName?: string | undefined;
    /**
     * The targetOperand property
     */
    targetOperand?: FilterOperand | undefined;
}
