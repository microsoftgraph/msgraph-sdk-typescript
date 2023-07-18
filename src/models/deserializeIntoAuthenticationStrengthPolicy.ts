import {AuthenticationCombinationConfiguration} from './authenticationCombinationConfiguration';
import {AuthenticationMethodModes} from './authenticationMethodModes';
import {AuthenticationStrengthPolicy} from './authenticationStrengthPolicy';
import {AuthenticationStrengthPolicyType} from './authenticationStrengthPolicyType';
import {AuthenticationStrengthRequirements} from './authenticationStrengthRequirements';
import {createAuthenticationCombinationConfigurationFromDiscriminatorValue} from './createAuthenticationCombinationConfigurationFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAuthenticationCombinationConfiguration} from './serializeAuthenticationCombinationConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationStrengthPolicy(authenticationStrengthPolicy: AuthenticationStrengthPolicy | undefined = {} as AuthenticationStrengthPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authenticationStrengthPolicy),
        "allowedCombinations": n => { authenticationStrengthPolicy.allowedCombinations = n.getCollectionOfEnumValues<AuthenticationMethodModes>(AuthenticationMethodModes); },
        "combinationConfigurations": n => { authenticationStrengthPolicy.combinationConfigurations = n.getCollectionOfObjectValues<AuthenticationCombinationConfiguration>(createAuthenticationCombinationConfigurationFromDiscriminatorValue); },
        "createdDateTime": n => { authenticationStrengthPolicy.createdDateTime = n.getDateValue(); },
        "description": n => { authenticationStrengthPolicy.description = n.getStringValue(); },
        "displayName": n => { authenticationStrengthPolicy.displayName = n.getStringValue(); },
        "modifiedDateTime": n => { authenticationStrengthPolicy.modifiedDateTime = n.getDateValue(); },
        "policyType": n => { authenticationStrengthPolicy.policyType = n.getEnumValue<AuthenticationStrengthPolicyType>(AuthenticationStrengthPolicyType); },
        "requirementsSatisfied": n => { authenticationStrengthPolicy.requirementsSatisfied = n.getEnumValue<AuthenticationStrengthRequirements>(AuthenticationStrengthRequirements); },
    }
}
