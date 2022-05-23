import {Call} from './call';
import {CallRecord} from './callRecords/callRecord';
import {Entity} from './entity';
import {OnlineMeeting} from './onlineMeeting';
import {Presence} from './presence';

export interface CloudCommunications extends Entity{
    /** The callRecords property */
    callRecords?:CallRecord[] | undefined;
    /** The calls property */
    calls?:Call[] | undefined;
    /** The onlineMeetings property */
    onlineMeetings?:OnlineMeeting[] | undefined;
    /** The presences property */
    presences?:Presence[] | undefined;
}
