import {RunAsAccountType} from './runAsAccountType';
import {Win32LobAppRestartBehavior} from './win32LobAppRestartBehavior';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppInstallExperience extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Indicates the type of restart action.
     */
    deviceRestartBehavior?: Win32LobAppRestartBehavior | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Indicates the type of execution context the app runs in.
     */
    runAsAccount?: RunAsAccountType | undefined;
}
