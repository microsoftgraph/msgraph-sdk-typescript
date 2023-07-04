import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TextColumn extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Whether to allow multiple lines of text.
     */
    allowMultipleLines?: boolean | undefined;
    /**
     * Whether updates to this column should replace existing text, or append to it.
     */
    appendChangesToExistingText?: boolean | undefined;
    /**
     * The size of the text box.
     */
    linesForEditing?: number | undefined;
    /**
     * The maximum number of characters for the value.
     */
    maxLength?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The type of text being stored. Must be one of plain or richText
     */
    textType?: string | undefined;
}
