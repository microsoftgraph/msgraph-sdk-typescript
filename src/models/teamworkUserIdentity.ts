import {Identity} from './identity';
import {TeamworkUserIdentityType} from './teamworkUserIdentityType';

export interface TeamworkUserIdentity extends Identity{
    /** Type of user. Possible values are: aadUser, onPremiseAadUser, anonymousGuest, federatedUser, personalMicrosoftAccountUser, skypeUser, phoneUser, and emailUser. */
    userIdentityType?:TeamworkUserIdentityType | undefined;
}
