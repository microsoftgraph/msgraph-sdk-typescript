import {LayoutTemplateType} from './layoutTemplateType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LoginPageLayoutConfiguration extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The isFooterShown property
     */
    isFooterShown?: boolean | undefined;
    /**
     * The isHeaderShown property
     */
    isHeaderShown?: boolean | undefined;
    /**
     * The layoutTemplateType property
     */
    layoutTemplateType?: LayoutTemplateType | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
