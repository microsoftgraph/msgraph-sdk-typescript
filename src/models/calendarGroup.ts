import {Calendar} from './calendar';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CalendarGroup extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The calendars in the calendar group. Navigation property. Read-only. Nullable. */
    calendars?: Calendar[] | undefined;
    /** Identifies the version of the calendar group. Every time the calendar group is changed, ChangeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only. */
    changeKey?: string | undefined;
    /** The class identifier. Read-only. */
    classId?: string | undefined;
    /** The group name. */
    name?: string | undefined;
}
