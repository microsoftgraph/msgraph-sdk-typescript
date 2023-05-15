import {ApplicationEnforcedRestrictionsSessionControl} from './applicationEnforcedRestrictionsSessionControl';
import {CloudAppSecuritySessionControl} from './cloudAppSecuritySessionControl';
import {ConditionalAccessSessionControls} from './conditionalAccessSessionControls';
import {PersistentBrowserSessionControl} from './persistentBrowserSessionControl';
import {serializeApplicationEnforcedRestrictionsSessionControl} from './serializeApplicationEnforcedRestrictionsSessionControl';
import {serializeCloudAppSecuritySessionControl} from './serializeCloudAppSecuritySessionControl';
import {serializePersistentBrowserSessionControl} from './serializePersistentBrowserSessionControl';
import {serializeSignInFrequencySessionControl} from './serializeSignInFrequencySessionControl';
import {SignInFrequencySessionControl} from './signInFrequencySessionControl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessSessionControls(writer: SerializationWriter, conditionalAccessSessionControls: ConditionalAccessSessionControls | undefined = {} as ConditionalAccessSessionControls) : void {
        writer.writeObjectValue<ApplicationEnforcedRestrictionsSessionControl>("applicationEnforcedRestrictions", conditionalAccessSessionControls.applicationEnforcedRestrictions, serializeApplicationEnforcedRestrictionsSessionControl);
        writer.writeObjectValue<CloudAppSecuritySessionControl>("cloudAppSecurity", conditionalAccessSessionControls.cloudAppSecurity, serializeCloudAppSecuritySessionControl);
        writer.writeBooleanValue("disableResilienceDefaults", conditionalAccessSessionControls.disableResilienceDefaults);
        writer.writeStringValue("@odata.type", conditionalAccessSessionControls.odataType);
        writer.writeObjectValue<PersistentBrowserSessionControl>("persistentBrowser", conditionalAccessSessionControls.persistentBrowser, serializePersistentBrowserSessionControl);
        writer.writeObjectValue<SignInFrequencySessionControl>("signInFrequency", conditionalAccessSessionControls.signInFrequency, serializeSignInFrequencySessionControl);
        writer.writeAdditionalData(conditionalAccessSessionControls.additionalData);
}
