import {RunAsAccountType} from './runAsAccountType';
import {Win32LobAppRestartBehavior} from './win32LobAppRestartBehavior';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppInstallExperience extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Device restart behavior. Possible values are: basedOnReturnCode, allow, suppress, force. */
    deviceRestartBehavior?: Win32LobAppRestartBehavior | undefined;
    /** Indicates the type of execution context the app runs in. Possible values are: system, user. */
    runAsAccount?: RunAsAccountType | undefined;
}
