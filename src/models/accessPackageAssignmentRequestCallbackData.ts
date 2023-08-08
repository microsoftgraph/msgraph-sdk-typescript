import {AccessPackageCustomExtensionStage} from './accessPackageCustomExtensionStage';
import type {CustomExtensionData} from './customExtensionData';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAssignmentRequestCallbackData extends CustomExtensionData, Parsable {
    /**
     * Details for the callback.
     */
    customExtensionStageInstanceDetail?: string | undefined;
    /**
     * Unique identifier of the callout to the custom extension.
     */
    customExtensionStageInstanceId?: string | undefined;
    /**
     * Indicates the stage at which the custom callout extension will be executed. The possible values are: assignmentRequestCreated, assignmentRequestApproved, assignmentRequestGranted, assignmentRequestRemoved, assignmentFourteenDaysBeforeExpiration, assignmentOneDayBeforeExpiration, unknownFutureValue.
     */
    stage?: AccessPackageCustomExtensionStage | undefined;
    /**
     * Allow the extension to be able to deny or cancel the request submitted by the requestor. The supported values are Denied and Canceled. This property can only be set for an assignmentRequestCreated stage.
     */
    state?: string | undefined;
}
