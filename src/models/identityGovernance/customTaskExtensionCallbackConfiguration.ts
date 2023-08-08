import type {Application} from '../application';
import type {CustomExtensionCallbackConfiguration} from '../customExtensionCallbackConfiguration';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface CustomTaskExtensionCallbackConfiguration extends CustomExtensionCallbackConfiguration, Parsable {
    /**
     * The authorizedApps property
     */
    authorizedApps?: Application[] | undefined;
}
