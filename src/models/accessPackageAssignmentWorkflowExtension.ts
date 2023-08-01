import type {CustomCalloutExtension} from './customCalloutExtension';
import type {CustomExtensionCallbackConfiguration} from './customExtensionCallbackConfiguration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAssignmentWorkflowExtension extends CustomCalloutExtension, Parsable {
    /**
     * The callback configuration for a custom extension.
     */
    callbackConfiguration?: CustomExtensionCallbackConfiguration | undefined;
    /**
     * The userPrincipalName of the user or identity of the subject that created this resource. Read-only.
     */
    createdBy?: string | undefined;
    /**
     * When the entity was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * The userPrincipalName of the identity that last modified the entity.
     */
    lastModifiedBy?: string | undefined;
    /**
     * When the entity was last modified.
     */
    lastModifiedDateTime?: Date | undefined;
}
