import {ActionState} from './actionState';

export interface DeviceActionResult{
    /** Action name */
    actionName?:string | undefined;
    /** State of the action. Possible values are: none, pending, canceled, active, done, failed, notSupported. */
    actionState?:ActionState | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Time the action state was last updated */
    lastUpdatedDateTime?:Date | undefined;
    /** Time the action was initiated */
    startDateTime?:Date | undefined;
}
