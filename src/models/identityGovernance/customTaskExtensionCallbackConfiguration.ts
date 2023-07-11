import {Application} from '../application';
import {CustomExtensionCallbackConfiguration} from '../customExtensionCallbackConfiguration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CustomTaskExtensionCallbackConfiguration extends CustomExtensionCallbackConfiguration, Parsable {
    /**
     * The authorizedApps property
     */
    authorizedApps?: Application[] | undefined;
}
