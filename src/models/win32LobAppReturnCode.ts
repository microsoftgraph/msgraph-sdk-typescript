import {Win32LobAppReturnCodeType} from './win32LobAppReturnCodeType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppReturnCode extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Return code.
     */
    returnCode?: number | undefined;
    /**
     * Indicates the type of return code.
     */
    type?: Win32LobAppReturnCodeType | undefined;
}
