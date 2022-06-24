import {Win32LobAppReturnCodeType} from './win32LobAppReturnCodeType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppReturnCode extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Return code. */
    returnCode?: number | undefined;
    /** The type of return code. Possible values are: failed, success, softReboot, hardReboot, retry. */
    type?: Win32LobAppReturnCodeType | undefined;
}
