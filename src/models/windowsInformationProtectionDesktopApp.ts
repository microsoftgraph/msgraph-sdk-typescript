import {WindowsInformationProtectionApp} from './windowsInformationProtectionApp';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionDesktopApp extends Partial<AdditionalDataHolder>, Partial<Parsable>, WindowsInformationProtectionApp {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The binary name. */
    binaryName?: string | undefined;
    /** The high binary version. */
    binaryVersionHigh?: string | undefined;
    /** The lower binary version. */
    binaryVersionLow?: string | undefined;
}
