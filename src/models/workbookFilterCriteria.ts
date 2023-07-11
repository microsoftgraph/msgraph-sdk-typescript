import {Json} from './json';
import {WorkbookIcon} from './workbookIcon';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookFilterCriteria extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The color property
     */
    color?: string | undefined;
    /**
     * The criterion1 property
     */
    criterion1?: string | undefined;
    /**
     * The criterion2 property
     */
    criterion2?: string | undefined;
    /**
     * The dynamicCriteria property
     */
    dynamicCriteria?: string | undefined;
    /**
     * The filterOn property
     */
    filterOn?: string | undefined;
    /**
     * The icon property
     */
    icon?: WorkbookIcon | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The operator property
     */
    operator?: string | undefined;
    /**
     * The values property
     */
    values?: Json | undefined;
}
