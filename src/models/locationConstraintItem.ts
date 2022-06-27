import {Location} from './location';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LocationConstraintItem extends Partial<AdditionalDataHolder>, Location, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** If set to true and the specified resource is busy, findMeetingTimes looks for another resource that is free. If set to false and the specified resource is busy, findMeetingTimes returns the resource best ranked in the user's cache without checking if it's free. Default is true. */
    resolveAvailability?: boolean | undefined;
}
