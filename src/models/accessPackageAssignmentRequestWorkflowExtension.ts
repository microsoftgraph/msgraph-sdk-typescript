import type {CustomCalloutExtension} from './customCalloutExtension';
import type {CustomExtensionCallbackConfiguration} from './customExtensionCallbackConfiguration';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAssignmentRequestWorkflowExtension extends CustomCalloutExtension, Parsable {
    /**
     * The callback configuration for a custom extension.
     */
    callbackConfiguration?: CustomExtensionCallbackConfiguration | undefined;
    /**
     * The userPrincipalName of the user or identity of the subject that created this resource. Read-only.
     */
    createdBy?: string | undefined;
    /**
     * When the object was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * The userPrincipalName of the identity that last modified the object.
     */
    lastModifiedBy?: string | undefined;
    /**
     * When the object was last modified.
     */
    lastModifiedDateTime?: Date | undefined;
}
