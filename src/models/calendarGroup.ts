import {Calendar} from './calendar';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface CalendarGroup extends Entity, Parsable {
    /**
     * The calendars in the calendar group. Navigation property. Read-only. Nullable.
     */
    calendars?: Calendar[] | undefined;
    /**
     * Identifies the version of the calendar group. Every time the calendar group is changed, ChangeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
     */
    changeKey?: string | undefined;
    /**
     * The class identifier. Read-only.
     */
    classId?: Guid | undefined;
    /**
     * The group name.
     */
    name?: string | undefined;
}
