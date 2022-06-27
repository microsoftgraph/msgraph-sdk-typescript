import {DirectoryObject} from './directoryObject';
import {PolicyBase} from './policyBase';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface StsPolicy extends Partial<AdditionalDataHolder>, Partial<Parsable>, PolicyBase {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The appliesTo property */
    appliesTo?: DirectoryObject[] | undefined;
    /** A string collection containing a JSON string that defines the rules and settings for a policy. The syntax for the definition differs for each derived policy type. Required. */
    definition?: string[] | undefined;
    /** If set to true, activates this policy. There can be many policies for the same policy type, but only one can be activated as the organization default. Optional, default value is false. */
    isOrganizationDefault?: boolean | undefined;
}
