import {ConditionalAccessConditionSet} from './conditionalAccessConditionSet';
import {ConditionalAccessGrantControls} from './conditionalAccessGrantControls';
import {ConditionalAccessSessionControls} from './conditionalAccessSessionControls';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessPolicyDetail extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The conditions property
     */
    conditions?: ConditionalAccessConditionSet | undefined;
    /**
     * Represents grant controls that must be fulfilled for the policy.
     */
    grantControls?: ConditionalAccessGrantControls | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Represents a complex type of session controls that is enforced after sign-in.
     */
    sessionControls?: ConditionalAccessSessionControls | undefined;
}
