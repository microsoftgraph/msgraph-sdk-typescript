import {CustomCalloutExtension} from './customCalloutExtension';
import {CustomExtensionCallbackConfiguration} from './customExtensionCallbackConfiguration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAssignmentWorkflowExtension extends CustomCalloutExtension, Parsable {
    /**
     * The callbackConfiguration property
     */
    callbackConfiguration?: CustomExtensionCallbackConfiguration | undefined;
    /**
     * The createdBy property
     */
    createdBy?: string | undefined;
    /**
     * The createdDateTime property
     */
    createdDateTime?: Date | undefined;
    /**
     * The lastModifiedBy property
     */
    lastModifiedBy?: string | undefined;
    /**
     * The lastModifiedDateTime property
     */
    lastModifiedDateTime?: Date | undefined;
}
