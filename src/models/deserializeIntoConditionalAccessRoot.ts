import {AuthenticationContextClassReference} from './authenticationContextClassReference';
import {AuthenticationStrengthRoot} from './authenticationStrengthRoot';
import {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import {ConditionalAccessRoot} from './conditionalAccessRoot';
import {ConditionalAccessTemplate} from './conditionalAccessTemplate';
import {createAuthenticationContextClassReferenceFromDiscriminatorValue} from './createAuthenticationContextClassReferenceFromDiscriminatorValue';
import {createAuthenticationStrengthRootFromDiscriminatorValue} from './createAuthenticationStrengthRootFromDiscriminatorValue';
import {createConditionalAccessPolicyFromDiscriminatorValue} from './createConditionalAccessPolicyFromDiscriminatorValue';
import {createConditionalAccessTemplateFromDiscriminatorValue} from './createConditionalAccessTemplateFromDiscriminatorValue';
import {createNamedLocationFromDiscriminatorValue} from './createNamedLocationFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {NamedLocation} from './namedLocation';
import {serializeAuthenticationContextClassReference} from './serializeAuthenticationContextClassReference';
import {serializeAuthenticationStrengthRoot} from './serializeAuthenticationStrengthRoot';
import {serializeConditionalAccessPolicy} from './serializeConditionalAccessPolicy';
import {serializeConditionalAccessTemplate} from './serializeConditionalAccessTemplate';
import {serializeNamedLocation} from './serializeNamedLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessRoot(conditionalAccessRoot: ConditionalAccessRoot | undefined = {} as ConditionalAccessRoot) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(conditionalAccessRoot),
        "authenticationContextClassReferences": n => { conditionalAccessRoot.authenticationContextClassReferences = n.getCollectionOfObjectValues<AuthenticationContextClassReference>(createAuthenticationContextClassReferenceFromDiscriminatorValue); },
        "authenticationStrength": n => { conditionalAccessRoot.authenticationStrength = n.getObjectValue<AuthenticationStrengthRoot>(createAuthenticationStrengthRootFromDiscriminatorValue); },
        "namedLocations": n => { conditionalAccessRoot.namedLocations = n.getCollectionOfObjectValues<NamedLocation>(createNamedLocationFromDiscriminatorValue); },
        "policies": n => { conditionalAccessRoot.policies = n.getCollectionOfObjectValues<ConditionalAccessPolicy>(createConditionalAccessPolicyFromDiscriminatorValue); },
        "templates": n => { conditionalAccessRoot.templates = n.getCollectionOfObjectValues<ConditionalAccessTemplate>(createConditionalAccessTemplateFromDiscriminatorValue); },
    }
}
