import {MdmAppConfigKeyType} from './mdmAppConfigKeyType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AppConfigurationSettingItem extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** app configuration key. */
    appConfigKey?: string | undefined;
    /** app configuration key type. Possible values are: stringType, integerType, realType, booleanType, tokenType. */
    appConfigKeyType?: MdmAppConfigKeyType | undefined;
    /** app configuration key value. */
    appConfigKeyValue?: string | undefined;
}
