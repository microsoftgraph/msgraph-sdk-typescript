import {DeviceConfiguration} from './deviceConfiguration';
import {OmaSetting} from './omaSetting';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidCustomConfiguration extends Partial<AdditionalDataHolder>, DeviceConfiguration, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** OMA settings. This collection can contain a maximum of 1000 elements. */
    omaSettings?: OmaSetting[] | undefined;
}
