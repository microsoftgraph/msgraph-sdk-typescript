import {ApplicationEnforcedRestrictionsSessionControl} from './applicationEnforcedRestrictionsSessionControl';
import {CloudAppSecuritySessionControl} from './cloudAppSecuritySessionControl';
import {ConditionalAccessSessionControls} from './conditionalAccessSessionControls';
import {createApplicationEnforcedRestrictionsSessionControlFromDiscriminatorValue} from './createApplicationEnforcedRestrictionsSessionControlFromDiscriminatorValue';
import {createCloudAppSecuritySessionControlFromDiscriminatorValue} from './createCloudAppSecuritySessionControlFromDiscriminatorValue';
import {createPersistentBrowserSessionControlFromDiscriminatorValue} from './createPersistentBrowserSessionControlFromDiscriminatorValue';
import {createSignInFrequencySessionControlFromDiscriminatorValue} from './createSignInFrequencySessionControlFromDiscriminatorValue';
import {PersistentBrowserSessionControl} from './persistentBrowserSessionControl';
import {serializeApplicationEnforcedRestrictionsSessionControl} from './serializeApplicationEnforcedRestrictionsSessionControl';
import {serializeCloudAppSecuritySessionControl} from './serializeCloudAppSecuritySessionControl';
import {serializePersistentBrowserSessionControl} from './serializePersistentBrowserSessionControl';
import {serializeSignInFrequencySessionControl} from './serializeSignInFrequencySessionControl';
import {SignInFrequencySessionControl} from './signInFrequencySessionControl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessSessionControls(conditionalAccessSessionControls: ConditionalAccessSessionControls | undefined = {} as ConditionalAccessSessionControls) : Record<string, (node: ParseNode) => void> {
    return {
        "applicationEnforcedRestrictions": n => { conditionalAccessSessionControls.applicationEnforcedRestrictions = n.getObjectValue<ApplicationEnforcedRestrictionsSessionControl>(createApplicationEnforcedRestrictionsSessionControlFromDiscriminatorValue); },
        "cloudAppSecurity": n => { conditionalAccessSessionControls.cloudAppSecurity = n.getObjectValue<CloudAppSecuritySessionControl>(createCloudAppSecuritySessionControlFromDiscriminatorValue); },
        "disableResilienceDefaults": n => { conditionalAccessSessionControls.disableResilienceDefaults = n.getBooleanValue(); },
        "@odata.type": n => { conditionalAccessSessionControls.odataType = n.getStringValue(); },
        "persistentBrowser": n => { conditionalAccessSessionControls.persistentBrowser = n.getObjectValue<PersistentBrowserSessionControl>(createPersistentBrowserSessionControlFromDiscriminatorValue); },
        "signInFrequency": n => { conditionalAccessSessionControls.signInFrequency = n.getObjectValue<SignInFrequencySessionControl>(createSignInFrequencySessionControlFromDiscriminatorValue); },
    }
}
