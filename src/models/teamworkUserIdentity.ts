import {Identity} from './identity';
import {TeamworkUserIdentityType} from './teamworkUserIdentityType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkUserIdentity extends Identity, Parsable {
    /**
     * Type of user. Possible values are: aadUser, onPremiseAadUser, anonymousGuest, federatedUser, personalMicrosoftAccountUser, skypeUser, phoneUser, unknownFutureValue and emailUser.
     */
    userIdentityType?: TeamworkUserIdentityType | undefined;
}
