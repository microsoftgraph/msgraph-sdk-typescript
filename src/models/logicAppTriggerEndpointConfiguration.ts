import {CustomExtensionEndpointConfiguration} from './customExtensionEndpointConfiguration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LogicAppTriggerEndpointConfiguration extends CustomExtensionEndpointConfiguration, Parsable {
    /**
     * The name of the logic app.
     */
    logicAppWorkflowName?: string | undefined;
    /**
     * The Azure resource group name for the logic app.
     */
    resourceGroupName?: string | undefined;
    /**
     * Identifier of the Azure subscription for the logic app.
     */
    subscriptionId?: string | undefined;
    /**
     * The URL to the logic app endpoint that will be triggered. Only required for app-only token scenarios where app is creating a customCalloutExtension without a signed-in user.
     */
    url?: string | undefined;
}
