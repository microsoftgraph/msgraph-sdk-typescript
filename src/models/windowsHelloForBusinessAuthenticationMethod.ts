import {AuthenticationMethod} from './authenticationMethod';
import {AuthenticationMethodKeyStrength} from './authenticationMethodKeyStrength';
import {Device} from './device';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsHelloForBusinessAuthenticationMethod extends AuthenticationMethod, Parsable {
    /**
     * The date and time that this Windows Hello for Business key was registered.
     */
    createdDateTime?: Date | undefined;
    /**
     * The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user's Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand=device.
     */
    device?: Device | undefined;
    /**
     * The name of the device on which Windows Hello for Business is registered
     */
    displayName?: string | undefined;
    /**
     * Key strength of this Windows Hello for Business key. Possible values are: normal, weak, unknown.
     */
    keyStrength?: AuthenticationMethodKeyStrength | undefined;
}
