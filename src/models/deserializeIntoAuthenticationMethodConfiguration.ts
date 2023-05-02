import {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import {AuthenticationMethodState} from './authenticationMethodState';
import {createExcludeTargetFromDiscriminatorValue} from './createExcludeTargetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ExcludeTarget} from './excludeTarget';
import {serializeExcludeTarget} from './serializeExcludeTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodConfiguration(authenticationMethodConfiguration: AuthenticationMethodConfiguration | undefined = {} as AuthenticationMethodConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authenticationMethodConfiguration),
        "excludeTargets": n => { authenticationMethodConfiguration.excludeTargets = n.getCollectionOfObjectValues<ExcludeTarget>(createExcludeTargetFromDiscriminatorValue); },
        "state": n => { authenticationMethodConfiguration.state = n.getEnumValue<AuthenticationMethodState>(AuthenticationMethodState); },
    }
}
