import {ItemActivityStat} from '../../../../../models/itemActivityStat';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface GetActivitiesByIntervalResponse extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The value property */
    value?: ItemActivityStat[] | undefined;
}
