import {AdvancedConfigState} from './advancedConfigState';
import {AuthenticationMethodFeatureConfiguration} from './authenticationMethodFeatureConfiguration';
import {createFeatureTargetFromDiscriminatorValue} from './createFeatureTargetFromDiscriminatorValue';
import {FeatureTarget} from './featureTarget';
import {serializeFeatureTarget} from './serializeFeatureTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodFeatureConfiguration(authenticationMethodFeatureConfiguration: AuthenticationMethodFeatureConfiguration | undefined = {} as AuthenticationMethodFeatureConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "excludeTarget": n => { authenticationMethodFeatureConfiguration.excludeTarget = n.getObjectValue<FeatureTarget>(createFeatureTargetFromDiscriminatorValue); },
        "includeTarget": n => { authenticationMethodFeatureConfiguration.includeTarget = n.getObjectValue<FeatureTarget>(createFeatureTargetFromDiscriminatorValue); },
        "@odata.type": n => { authenticationMethodFeatureConfiguration.odataType = n.getStringValue(); },
        "state": n => { authenticationMethodFeatureConfiguration.state = n.getEnumValue<AdvancedConfigState>(AdvancedConfigState); },
    }
}
