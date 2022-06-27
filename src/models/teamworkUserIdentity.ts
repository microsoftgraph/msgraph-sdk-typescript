import {Identity} from './identity';
import {TeamworkUserIdentityType} from './teamworkUserIdentityType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkUserIdentity extends Identity, Partial<Parsable> {
    /** Type of user. Possible values are: aadUser, onPremiseAadUser, anonymousGuest, federatedUser, personalMicrosoftAccountUser, skypeUser, phoneUser, and emailUser. */
    userIdentityType?: TeamworkUserIdentityType | undefined;
}
