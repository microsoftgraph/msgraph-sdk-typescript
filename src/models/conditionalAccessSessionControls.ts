import {ApplicationEnforcedRestrictionsSessionControl} from './applicationEnforcedRestrictionsSessionControl';
import {CloudAppSecuritySessionControl} from './cloudAppSecuritySessionControl';
import {PersistentBrowserSessionControl} from './persistentBrowserSessionControl';
import {SignInFrequencySessionControl} from './signInFrequencySessionControl';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessSessionControls extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Session control to enforce application restrictions. Only Exchange Online and Sharepoint Online support this session control.
     */
    applicationEnforcedRestrictions?: ApplicationEnforcedRestrictionsSessionControl | undefined;
    /**
     * Session control to apply cloud app security.
     */
    cloudAppSecurity?: CloudAppSecuritySessionControl | undefined;
    /**
     * Session control that determines whether it is acceptable for Azure AD to extend existing sessions based on information collected prior to an outage or not.
     */
    disableResilienceDefaults?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Session control to define whether to persist cookies or not. All apps should be selected for this session control to work correctly.
     */
    persistentBrowser?: PersistentBrowserSessionControl | undefined;
    /**
     * Session control to enforce signin frequency.
     */
    signInFrequency?: SignInFrequencySessionControl | undefined;
}
