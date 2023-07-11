import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChoiceColumn extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * If true, allows custom values that aren't in the configured choices.
     */
    allowTextEntry?: boolean | undefined;
    /**
     * The list of values available for this column.
     */
    choices?: string[] | undefined;
    /**
     * How the choices are to be presented in the UX. Must be one of checkBoxes, dropDownMenu, or radioButtons
     */
    displayAs?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
