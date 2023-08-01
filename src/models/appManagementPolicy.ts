import type {AppManagementConfiguration} from './appManagementConfiguration';
import type {DirectoryObject} from './directoryObject';
import type {PolicyBase} from './policyBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AppManagementPolicy extends Parsable, PolicyBase {
    /**
     * Collection of applications and service principals to which the policy is applied.
     */
    appliesTo?: DirectoryObject[] | undefined;
    /**
     * Denotes whether the policy is enabled.
     */
    isEnabled?: boolean | undefined;
    /**
     * Restrictions that apply to an application or service principal object.
     */
    restrictions?: AppManagementConfiguration | undefined;
}
