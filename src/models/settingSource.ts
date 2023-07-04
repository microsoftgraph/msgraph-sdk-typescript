import {SettingSourceType} from './settingSourceType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SettingSource extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Not yet documented
     */
    displayName?: string | undefined;
    /**
     * Not yet documented
     */
    id?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The sourceType property
     */
    sourceType?: SettingSourceType | undefined;
}
