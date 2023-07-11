import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OnPremisesExtensionAttributes extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * First customizable extension attribute.
     */
    extensionAttribute1?: string | undefined;
    /**
     * Tenth customizable extension attribute.
     */
    extensionAttribute10?: string | undefined;
    /**
     * Eleventh customizable extension attribute.
     */
    extensionAttribute11?: string | undefined;
    /**
     * Twelfth customizable extension attribute.
     */
    extensionAttribute12?: string | undefined;
    /**
     * Thirteenth customizable extension attribute.
     */
    extensionAttribute13?: string | undefined;
    /**
     * Fourteenth customizable extension attribute.
     */
    extensionAttribute14?: string | undefined;
    /**
     * Fifteenth customizable extension attribute.
     */
    extensionAttribute15?: string | undefined;
    /**
     * Second customizable extension attribute.
     */
    extensionAttribute2?: string | undefined;
    /**
     * Third customizable extension attribute.
     */
    extensionAttribute3?: string | undefined;
    /**
     * Fourth customizable extension attribute.
     */
    extensionAttribute4?: string | undefined;
    /**
     * Fifth customizable extension attribute.
     */
    extensionAttribute5?: string | undefined;
    /**
     * Sixth customizable extension attribute.
     */
    extensionAttribute6?: string | undefined;
    /**
     * Seventh customizable extension attribute.
     */
    extensionAttribute7?: string | undefined;
    /**
     * Eighth customizable extension attribute.
     */
    extensionAttribute8?: string | undefined;
    /**
     * Ninth customizable extension attribute.
     */
    extensionAttribute9?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
