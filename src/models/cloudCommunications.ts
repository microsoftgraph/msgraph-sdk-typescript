import type {Call} from './call';
import type {CallRecord} from './callRecords/callRecord';
import type {OnlineMeeting} from './onlineMeeting';
import type {Presence} from './presence';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CloudCommunications extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The callRecords property
     */
    callRecords?: CallRecord[] | undefined;
    /**
     * The calls property
     */
    calls?: Call[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The onlineMeetings property
     */
    onlineMeetings?: OnlineMeeting[] | undefined;
    /**
     * The presences property
     */
    presences?: Presence[] | undefined;
}
