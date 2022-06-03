import {Call} from './call';
import {CallRecord} from './callRecords/callRecord';
import {Entity} from './entity';
import {OnlineMeeting} from './onlineMeeting';
import {Presence} from './presence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CloudCommunications extends Entity, Partial<Parsable> {
    /** The callRecords property */
    callRecords?: CallRecord[] | undefined;
    /** The calls property */
    calls?: Call[] | undefined;
    /** The onlineMeetings property */
    onlineMeetings?: OnlineMeeting[] | undefined;
    /** The presences property */
    presences?: Presence[] | undefined;
}
