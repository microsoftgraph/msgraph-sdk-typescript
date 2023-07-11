import {AccessPackageCustomExtensionStage} from './accessPackageCustomExtensionStage';
import {CustomExtensionData} from './customExtensionData';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAssignmentRequestCallbackData extends CustomExtensionData, Parsable {
    /**
     * The customExtensionStageInstanceDetail property
     */
    customExtensionStageInstanceDetail?: string | undefined;
    /**
     * The customExtensionStageInstanceId property
     */
    customExtensionStageInstanceId?: string | undefined;
    /**
     * The stage property
     */
    stage?: AccessPackageCustomExtensionStage | undefined;
    /**
     * The state property
     */
    state?: string | undefined;
}
