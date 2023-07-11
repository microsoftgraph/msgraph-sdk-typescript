import {AuthenticationCombinationConfiguration} from './authenticationCombinationConfiguration';
import {AuthenticationMethodModes} from './authenticationMethodModes';
import {AuthenticationStrengthPolicyType} from './authenticationStrengthPolicyType';
import {AuthenticationStrengthRequirements} from './authenticationStrengthRequirements';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationStrengthPolicy extends Entity, Parsable {
    /**
     * A collection of authentication method modes that are required be used to satify this authentication strength.
     */
    allowedCombinations?: AuthenticationMethodModes[] | undefined;
    /**
     * Settings that may be used to require specific types or instances of an authentication method to be used when authenticating with a specified combination of authentication methods.
     */
    combinationConfigurations?: AuthenticationCombinationConfiguration[] | undefined;
    /**
     * The datetime when this policy was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * The human-readable description of this policy.
     */
    description?: string | undefined;
    /**
     * The human-readable display name of this policy. Supports $filter (eq, ne, not , and in).
     */
    displayName?: string | undefined;
    /**
     * The datetime when this policy was last modified.
     */
    modifiedDateTime?: Date | undefined;
    /**
     * The policyType property
     */
    policyType?: AuthenticationStrengthPolicyType | undefined;
    /**
     * The requirementsSatisfied property
     */
    requirementsSatisfied?: AuthenticationStrengthRequirements | undefined;
}
