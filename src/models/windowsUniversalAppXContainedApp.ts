import {MobileContainedApp} from './mobileContainedApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsUniversalAppXContainedApp extends MobileContainedApp, Parsable {
    /**
     * The app user model ID of the contained app of a WindowsUniversalAppX app.
     */
    appUserModelId?: string | undefined;
}
