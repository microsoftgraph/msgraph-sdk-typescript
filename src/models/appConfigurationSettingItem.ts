import {MdmAppConfigKeyType} from './mdmAppConfigKeyType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AppConfigurationSettingItem extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * app configuration key.
     */
    appConfigKey?: string | undefined;
    /**
     * App configuration key types.
     */
    appConfigKeyType?: MdmAppConfigKeyType | undefined;
    /**
     * app configuration key value.
     */
    appConfigKeyValue?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
