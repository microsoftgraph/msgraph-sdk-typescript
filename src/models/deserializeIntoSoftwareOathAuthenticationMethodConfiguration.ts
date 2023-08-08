import type {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {createAuthenticationMethodTargetFromDiscriminatorValue} from './createAuthenticationMethodTargetFromDiscriminatorValue';
import {deserializeIntoAuthenticationMethodConfiguration} from './deserializeIntoAuthenticationMethodConfiguration';
import {serializeAuthenticationMethodTarget} from './serializeAuthenticationMethodTarget';
import type {SoftwareOathAuthenticationMethodConfiguration} from './softwareOathAuthenticationMethodConfiguration';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSoftwareOathAuthenticationMethodConfiguration(softwareOathAuthenticationMethodConfiguration: SoftwareOathAuthenticationMethodConfiguration | undefined = {} as SoftwareOathAuthenticationMethodConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethodConfiguration(softwareOathAuthenticationMethodConfiguration),
        "includeTargets": n => { softwareOathAuthenticationMethodConfiguration.includeTargets = n.getCollectionOfObjectValues<AuthenticationMethodTarget>(createAuthenticationMethodTargetFromDiscriminatorValue); },
    }
}
