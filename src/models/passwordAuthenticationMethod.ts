import {AuthenticationMethod} from './authenticationMethod';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PasswordAuthenticationMethod extends AuthenticationMethod, Parsable {
    /**
     * The date and time when this password was last updated. This property is currently not populated. Read-only. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    createdDateTime?: Date | undefined;
    /**
     * For security, the password is always returned as null from a LIST or GET operation.
     */
    password?: string | undefined;
}
