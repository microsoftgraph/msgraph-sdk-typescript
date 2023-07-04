import {CustomExtensionData} from '../customExtensionData';
import {CustomTaskExtensionOperationStatus} from './customTaskExtensionOperationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CustomTaskExtensionCallbackData extends CustomExtensionData, Parsable {
    /**
     * Operation status that's provided by the Azure Logic App indicating whenever the Azure Logic App has run successfully or not. Supported values: completed, failed, unknownFutureValue.
     */
    operationStatus?: CustomTaskExtensionOperationStatus | undefined;
}
