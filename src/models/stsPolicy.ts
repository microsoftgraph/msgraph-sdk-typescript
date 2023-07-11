import {DirectoryObject} from './directoryObject';
import {PolicyBase} from './policyBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface StsPolicy extends Parsable, PolicyBase {
    /**
     * The appliesTo property
     */
    appliesTo?: DirectoryObject[] | undefined;
    /**
     * A string collection containing a JSON string that defines the rules and settings for a policy. The syntax for the definition differs for each derived policy type. Required.
     */
    definition?: string[] | undefined;
    /**
     * If set to true, activates this policy. There can be many policies for the same policy type, but only one can be activated as the organization default. Optional, default value is false.
     */
    isOrganizationDefault?: boolean | undefined;
}
