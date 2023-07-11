import {AuthenticationMethod} from './authenticationMethod';
import {Device} from './device';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorAuthenticationMethod extends AuthenticationMethod, Parsable {
    /**
     * The date and time that this app was registered. This property is null if the device is not registered for passwordless Phone Sign-In.
     */
    createdDateTime?: Date | undefined;
    /**
     * The registered device on which Microsoft Authenticator resides. This property is null if the device is not registered for passwordless Phone Sign-In.
     */
    device?: Device | undefined;
    /**
     * Tags containing app metadata.
     */
    deviceTag?: string | undefined;
    /**
     * The name of the device on which this app is registered.
     */
    displayName?: string | undefined;
    /**
     * Numerical version of this instance of the Authenticator app.
     */
    phoneAppVersion?: string | undefined;
}
