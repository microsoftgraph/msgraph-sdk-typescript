import {ApplicationEnforcedRestrictionsSessionControl} from './applicationEnforcedRestrictionsSessionControl';
import {CloudAppSecuritySessionControl} from './cloudAppSecuritySessionControl';
import {ConditionalAccessSessionControls} from './conditionalAccessSessionControls';
import {createApplicationEnforcedRestrictionsSessionControlFromDiscriminatorValue} from './createApplicationEnforcedRestrictionsSessionControlFromDiscriminatorValue';
import {createCloudAppSecuritySessionControlFromDiscriminatorValue} from './createCloudAppSecuritySessionControlFromDiscriminatorValue';
import {createPersistentBrowserSessionControlFromDiscriminatorValue} from './createPersistentBrowserSessionControlFromDiscriminatorValue';
import {createSignInFrequencySessionControlFromDiscriminatorValue} from './createSignInFrequencySessionControlFromDiscriminatorValue';
import {ApplicationEnforcedRestrictionsSessionControlImpl, CloudAppSecuritySessionControlImpl, PersistentBrowserSessionControlImpl, SignInFrequencySessionControlImpl} from './index';
import {PersistentBrowserSessionControl} from './persistentBrowserSessionControl';
import {SignInFrequencySessionControl} from './signInFrequencySessionControl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessSessionControlsImpl implements AdditionalDataHolder, ConditionalAccessSessionControls, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Session control to enforce application restrictions. Only Exchange Online and Sharepoint Online support this session control. */
    public applicationEnforcedRestrictions?: ApplicationEnforcedRestrictionsSessionControl | undefined;
    /** Session control to apply cloud app security. */
    public cloudAppSecurity?: CloudAppSecuritySessionControl | undefined;
    /** Session control that determines whether it is acceptable for Azure AD to extend existing sessions based on information collected prior to an outage or not. */
    public disableResilienceDefaults?: boolean | undefined;
    /** Session control to define whether to persist cookies or not. All apps should be selected for this session control to work correctly. */
    public persistentBrowser?: PersistentBrowserSessionControl | undefined;
    /** Session control to enforce signin frequency. */
    public signInFrequency?: SignInFrequencySessionControl | undefined;
    /**
     * Instantiates a new conditionalAccessSessionControls and sets the default values.
     * @param conditionalAccessSessionControlsParameterValue 
     */
    public constructor(conditionalAccessSessionControlsParameterValue?: ConditionalAccessSessionControls | undefined) {
        this.additionalData = conditionalAccessSessionControlsParameterValue?.additionalData ? conditionalAccessSessionControlsParameterValue?.additionalData! : {}
        this.applicationEnforcedRestrictions = conditionalAccessSessionControlsParameterValue?.applicationEnforcedRestrictions ;
        this.cloudAppSecurity = conditionalAccessSessionControlsParameterValue?.cloudAppSecurity ;
        this.disableResilienceDefaults = conditionalAccessSessionControlsParameterValue?.disableResilienceDefaults ;
        this.persistentBrowser = conditionalAccessSessionControlsParameterValue?.persistentBrowser ;
        this.signInFrequency = conditionalAccessSessionControlsParameterValue?.signInFrequency ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "applicationEnforcedRestrictions": n => { this.applicationEnforcedRestrictions = n.getObjectValue<ApplicationEnforcedRestrictionsSessionControlImpl>(createApplicationEnforcedRestrictionsSessionControlFromDiscriminatorValue); },
            "cloudAppSecurity": n => { this.cloudAppSecurity = n.getObjectValue<CloudAppSecuritySessionControlImpl>(createCloudAppSecuritySessionControlFromDiscriminatorValue); },
            "disableResilienceDefaults": n => { this.disableResilienceDefaults = n.getBooleanValue(); },
            "persistentBrowser": n => { this.persistentBrowser = n.getObjectValue<PersistentBrowserSessionControlImpl>(createPersistentBrowserSessionControlFromDiscriminatorValue); },
            "signInFrequency": n => { this.signInFrequency = n.getObjectValue<SignInFrequencySessionControlImpl>(createSignInFrequencySessionControlFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.applicationEnforcedRestrictions){
        writer.writeObjectValue<ApplicationEnforcedRestrictionsSessionControlImpl>("applicationEnforcedRestrictions", new ApplicationEnforcedRestrictionsSessionControlImpl(this.applicationEnforcedRestrictions));
        }
        if(this.cloudAppSecurity){
        writer.writeObjectValue<CloudAppSecuritySessionControlImpl>("cloudAppSecurity", new CloudAppSecuritySessionControlImpl(this.cloudAppSecurity));
        }
        if(this.disableResilienceDefaults){
        writer.writeBooleanValue("disableResilienceDefaults", this.disableResilienceDefaults);
        }
        if(this.persistentBrowser){
        writer.writeObjectValue<PersistentBrowserSessionControlImpl>("persistentBrowser", new PersistentBrowserSessionControlImpl(this.persistentBrowser));
        }
        if(this.signInFrequency){
        writer.writeObjectValue<SignInFrequencySessionControlImpl>("signInFrequency", new SignInFrequencySessionControlImpl(this.signInFrequency));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
