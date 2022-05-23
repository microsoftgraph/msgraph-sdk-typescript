import {AccessType} from './accessType';
import {AclType} from './aclType';

export interface Acl{
    /** The access granted to the identity. Possible values are: grant, deny. */
    accessType?:AccessType | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The type of identity. Possible values are: user, group, everyone, everyoneExceptGuests if the identitySource is azureActiveDirectory and just group if the identitySource is external. */
    type?:AclType | undefined;
    /** The unique identifer of the identity. In case of Azure Active Directory identities, value is set to the object identifier of the user, group or tenant for types user, group and everyone (and everyoneExceptGuests) respectively. In case of external groups value is set to the ID of the externalGroup. */
    value?:string | undefined;
}
