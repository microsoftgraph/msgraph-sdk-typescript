import {ClonableTeamParts} from '../../../models/clonableTeamParts';
import {TeamVisibilityType} from '../../../models/teamVisibilityType';

export interface ClonePostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The classification property */
    classification?:string | undefined;
    /** The description property */
    description?:string | undefined;
    /** The displayName property */
    displayName?:string | undefined;
    /** The mailNickname property */
    mailNickname?:string | undefined;
    /** The partsToClone property */
    partsToClone?:ClonableTeamParts | undefined;
    /** The visibility property */
    visibility?:TeamVisibilityType | undefined;
}
