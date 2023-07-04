import {WindowsInformationProtectionApp} from './windowsInformationProtectionApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionDesktopApp extends Parsable, WindowsInformationProtectionApp {
    /**
     * The binary name.
     */
    binaryName?: string | undefined;
    /**
     * The high binary version.
     */
    binaryVersionHigh?: string | undefined;
    /**
     * The lower binary version.
     */
    binaryVersionLow?: string | undefined;
}
