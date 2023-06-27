import {MobileApp} from './mobileApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsWebApp extends MobileApp, Parsable {
    /**
     * Indicates the Windows web app URL. Example: 'https://www.contoso.com'
     */
    appUrl?: string | undefined;
}
