import {LocationConstraintItem} from './locationConstraintItem';

export interface LocationConstraint{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The client requests the service to include in the response a meeting location for the meeting. If this is true and all the resources are busy, findMeetingTimes will not return any meeting time suggestions. If this is false and all the resources are busy, findMeetingTimes would still look for meeting times without locations. */
    isRequired?:boolean | undefined;
    /** Constraint information for one or more locations that the client requests for the meeting. */
    locations?:LocationConstraintItem[] | undefined;
    /** The client requests the service to suggest one or more meeting locations. */
    suggestLocation?:boolean | undefined;
}
