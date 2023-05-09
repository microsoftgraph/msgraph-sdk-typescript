import {AuthenticationContextClassReference} from './authenticationContextClassReference';
import {AuthenticationStrengthRoot} from './authenticationStrengthRoot';
import {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import {ConditionalAccessRoot} from './conditionalAccessRoot';
import {ConditionalAccessTemplate} from './conditionalAccessTemplate';
import {NamedLocation} from './namedLocation';
import {serializeAuthenticationContextClassReference} from './serializeAuthenticationContextClassReference';
import {serializeAuthenticationStrengthRoot} from './serializeAuthenticationStrengthRoot';
import {serializeConditionalAccessPolicy} from './serializeConditionalAccessPolicy';
import {serializeConditionalAccessTemplate} from './serializeConditionalAccessTemplate';
import {serializeEntity} from './serializeEntity';
import {serializeNamedLocation} from './serializeNamedLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessRoot(writer: SerializationWriter, conditionalAccessRoot: ConditionalAccessRoot | undefined = {} as ConditionalAccessRoot) : void {
        serializeEntity(writer, conditionalAccessRoot)
        writer.writeCollectionOfObjectValues<AuthenticationContextClassReference>("authenticationContextClassReferences", conditionalAccessRoot.authenticationContextClassReferences, serializeAuthenticationContextClassReference);
        writer.writeObjectValue<AuthenticationStrengthRoot>("authenticationStrength", conditionalAccessRoot.authenticationStrength, serializeAuthenticationStrengthRoot);
        writer.writeCollectionOfObjectValues<NamedLocation>("namedLocations", conditionalAccessRoot.namedLocations, serializeNamedLocation);
        writer.writeCollectionOfObjectValues<ConditionalAccessPolicy>("policies", conditionalAccessRoot.policies, serializeConditionalAccessPolicy);
        writer.writeCollectionOfObjectValues<ConditionalAccessTemplate>("templates", conditionalAccessRoot.templates, serializeConditionalAccessTemplate);
}
