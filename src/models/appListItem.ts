import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AppListItem extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The application or bundle identifier of the application */
    appId?: string | undefined;
    /** The Store URL of the application */
    appStoreUrl?: string | undefined;
    /** The application name */
    name?: string | undefined;
    /** The publisher of the application */
    publisher?: string | undefined;
}
