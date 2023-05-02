import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {createAuthenticationMethodTargetFromDiscriminatorValue} from './createAuthenticationMethodTargetFromDiscriminatorValue';
import {deserializeIntoAuthenticationMethodConfiguration} from './deserializeIntoAuthenticationMethodConfiguration';
import {serializeAuthenticationMethodTarget} from './serializeAuthenticationMethodTarget';
import {TemporaryAccessPassAuthenticationMethodConfiguration} from './temporaryAccessPassAuthenticationMethodConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTemporaryAccessPassAuthenticationMethodConfiguration(temporaryAccessPassAuthenticationMethodConfiguration: TemporaryAccessPassAuthenticationMethodConfiguration | undefined = {} as TemporaryAccessPassAuthenticationMethodConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethodConfiguration(temporaryAccessPassAuthenticationMethodConfiguration),
        "defaultLength": n => { temporaryAccessPassAuthenticationMethodConfiguration.defaultLength = n.getNumberValue(); },
        "defaultLifetimeInMinutes": n => { temporaryAccessPassAuthenticationMethodConfiguration.defaultLifetimeInMinutes = n.getNumberValue(); },
        "includeTargets": n => { temporaryAccessPassAuthenticationMethodConfiguration.includeTargets = n.getCollectionOfObjectValues<AuthenticationMethodTarget>(createAuthenticationMethodTargetFromDiscriminatorValue); },
        "isUsableOnce": n => { temporaryAccessPassAuthenticationMethodConfiguration.isUsableOnce = n.getBooleanValue(); },
        "maximumLifetimeInMinutes": n => { temporaryAccessPassAuthenticationMethodConfiguration.maximumLifetimeInMinutes = n.getNumberValue(); },
        "minimumLifetimeInMinutes": n => { temporaryAccessPassAuthenticationMethodConfiguration.minimumLifetimeInMinutes = n.getNumberValue(); },
    }
}
