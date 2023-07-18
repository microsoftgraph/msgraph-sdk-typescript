import {AuthenticationStrengthPolicy} from './authenticationStrengthPolicy';
import {ConditionalAccessGrantControl} from './conditionalAccessGrantControl';
import {ConditionalAccessGrantControls} from './conditionalAccessGrantControls';
import {createAuthenticationStrengthPolicyFromDiscriminatorValue} from './createAuthenticationStrengthPolicyFromDiscriminatorValue';
import {serializeAuthenticationStrengthPolicy} from './serializeAuthenticationStrengthPolicy';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessGrantControls(conditionalAccessGrantControls: ConditionalAccessGrantControls | undefined = {} as ConditionalAccessGrantControls) : Record<string, (node: ParseNode) => void> {
    return {
        "authenticationStrength": n => { conditionalAccessGrantControls.authenticationStrength = n.getObjectValue<AuthenticationStrengthPolicy>(createAuthenticationStrengthPolicyFromDiscriminatorValue); },
        "builtInControls": n => { conditionalAccessGrantControls.builtInControls = n.getCollectionOfEnumValues<ConditionalAccessGrantControl>(ConditionalAccessGrantControl); },
        "customAuthenticationFactors": n => { conditionalAccessGrantControls.customAuthenticationFactors = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { conditionalAccessGrantControls.odataType = n.getStringValue(); },
        "operator": n => { conditionalAccessGrantControls.operator = n.getStringValue(); },
        "termsOfUse": n => { conditionalAccessGrantControls.termsOfUse = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
