import {AuthenticationCombinationConfiguration} from './authenticationCombinationConfiguration';
import {AuthenticationMethodModes} from './authenticationMethodModes';
import {AuthenticationStrengthPolicy} from './authenticationStrengthPolicy';
import {AuthenticationStrengthPolicyType} from './authenticationStrengthPolicyType';
import {AuthenticationStrengthRequirements} from './authenticationStrengthRequirements';
import {serializeAuthenticationCombinationConfiguration} from './serializeAuthenticationCombinationConfiguration';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationStrengthPolicy(writer: SerializationWriter, authenticationStrengthPolicy: AuthenticationStrengthPolicy | undefined = {} as AuthenticationStrengthPolicy) : void {
        serializeEntity(writer, authenticationStrengthPolicy)
        if(authenticationStrengthPolicy.allowedCombinations)
        writer.writeEnumValue<AuthenticationMethodModes>("allowedCombinations", ...authenticationStrengthPolicy.allowedCombinations);
        writer.writeCollectionOfObjectValues<AuthenticationCombinationConfiguration>("combinationConfigurations", authenticationStrengthPolicy.combinationConfigurations, serializeAuthenticationCombinationConfiguration);
        writer.writeDateValue("createdDateTime", authenticationStrengthPolicy.createdDateTime);
        writer.writeStringValue("description", authenticationStrengthPolicy.description);
        writer.writeStringValue("displayName", authenticationStrengthPolicy.displayName);
        writer.writeDateValue("modifiedDateTime", authenticationStrengthPolicy.modifiedDateTime);
        writer.writeEnumValue<AuthenticationStrengthPolicyType>("policyType", authenticationStrengthPolicy.policyType);
        writer.writeEnumValue<AuthenticationStrengthRequirements>("requirementsSatisfied", authenticationStrengthPolicy.requirementsSatisfied);
}
