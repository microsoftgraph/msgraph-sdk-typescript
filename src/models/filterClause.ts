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
     * Name of the operator to be applied to the source and target operands. Must be one of the supported operators. Supported operators can be discovered.
     */
    operatorName?: string | undefined;
    /**
     * Name of source operand (the operand being tested). The source operand name must match one of the attribute names on the source object.
     */
    sourceOperandName?: string | undefined;
    /**
     * Values that the source operand will be tested against.
     */
    targetOperand?: FilterOperand | undefined;
}
