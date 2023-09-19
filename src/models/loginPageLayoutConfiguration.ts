import { LayoutTemplateType } from './layoutTemplateType';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface LoginPageLayoutConfiguration extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Option to show the footer on the sign-in page.
     */
    isFooterShown?: boolean | undefined;
    /**
     * Option to show the header on the sign-in page.
     */
    isHeaderShown?: boolean | undefined;
    /**
     * Represents the layout template to be displayed on the login page for a tenant. The possible values are  default - Represents the default Microsoft layout with a centered lightbox.  verticalSplit - Represents a layout with a background on the left side and a full-height lightbox to the right.  unknownFutureValue - Evolvable enumeration sentinel value. Don't use.
     */
    layoutTemplateType?: LayoutTemplateType | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
