import {AuthenticationStrengthPolicy} from './authenticationStrengthPolicy';
import {ConditionalAccessGrantControl} from './conditionalAccessGrantControl';
import {ConditionalAccessGrantControls} from './conditionalAccessGrantControls';
import {serializeAuthenticationStrengthPolicy} from './serializeAuthenticationStrengthPolicy';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessGrantControls(conditionalAccessGrantControls: ConditionalAccessGrantControls | undefined = {} as ConditionalAccessGrantControls, writer: SerializationWriter) : void {
        writer.writeObjectValue<AuthenticationStrengthPolicy>("authenticationStrength", conditionalAccessGrantControls.authenticationStrength, serializeAuthenticationStrengthPolicy);
        if(conditionalAccessGrantControls.builtInControls)
        writer.writeEnumValue<ConditionalAccessGrantControl>("builtInControls", ...conditionalAccessGrantControls.builtInControls);
        writer.writeCollectionOfPrimitiveValues<string>("customAuthenticationFactors", conditionalAccessGrantControls.customAuthenticationFactors);
        writer.writeStringValue("@odata.type", conditionalAccessGrantControls.odataType);
        writer.writeStringValue("operator", conditionalAccessGrantControls.operator);
        writer.writeCollectionOfPrimitiveValues<string>("termsOfUse", conditionalAccessGrantControls.termsOfUse);
        writer.writeAdditionalData(conditionalAccessGrantControls.additionalData);
}
