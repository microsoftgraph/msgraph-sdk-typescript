import {Set} from './termStore/set';
import {Term} from './termStore/term';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TermColumn extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Specifies whether the column will allow more than one value.
     */
    allowMultipleValues?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The parentTerm property
     */
    parentTerm?: Term | undefined;
    /**
     * Specifies whether to display the entire term path or only the term label.
     */
    showFullyQualifiedName?: boolean | undefined;
    /**
     * The termSet property
     */
    termSet?: Set | undefined;
}
