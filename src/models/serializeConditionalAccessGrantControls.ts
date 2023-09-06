import { type AuthenticationStrengthPolicy } from './authenticationStrengthPolicy';
import { ConditionalAccessGrantControl } from './conditionalAccessGrantControl';
import { type ConditionalAccessGrantControls } from './conditionalAccessGrantControls';
import { serializeAuthenticationStrengthPolicy } from './serializeAuthenticationStrengthPolicy';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessGrantControls(writer: SerializationWriter, conditionalAccessGrantControls: ConditionalAccessGrantControls | undefined = {} as ConditionalAccessGrantControls) : void {
        writer.writeObjectValue<AuthenticationStrengthPolicy>("authenticationStrength", conditionalAccessGrantControls.authenticationStrength, serializeAuthenticationStrengthPolicy);
        writer.writeCollectionOfObjectValues<ConditionalAccessGrantControl>("builtInControls", conditionalAccessGrantControls.builtInControls, object);
        writer.writeCollectionOfPrimitiveValues<string>("customAuthenticationFactors", conditionalAccessGrantControls.customAuthenticationFactors);
        writer.writeStringValue("@odata.type", conditionalAccessGrantControls.odataType);
        writer.writeStringValue("operator", conditionalAccessGrantControls.operator);
        writer.writeCollectionOfPrimitiveValues<string>("termsOfUse", conditionalAccessGrantControls.termsOfUse);
        writer.writeAdditionalData(conditionalAccessGrantControls.additionalData);
}
