import {Location} from './location';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LocationConstraintItem extends Location, Parsable {
    /**
     * If set to true and the specified resource is busy, findMeetingTimes looks for another resource that is free. If set to false and the specified resource is busy, findMeetingTimes returns the resource best ranked in the user's cache without checking if it's free. Default is true.
     */
    resolveAvailability?: boolean | undefined;
}
