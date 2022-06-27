import {Entity} from './entity';
import {OutlookCategory} from './outlookCategory';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OutlookUser extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A list of categories defined for the user. */
    masterCategories?: OutlookCategory[] | undefined;
}
