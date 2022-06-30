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

export class ConditionalAccessSessionControlsImpl implements ConditionalAccessSessionControls {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Session control to enforce application restrictions. Only Exchange Online and Sharepoint Online support this session control. */
    private _applicationEnforcedRestrictions?: ApplicationEnforcedRestrictionsSessionControl | undefined;
    /** Session control to apply cloud app security. */
    private _cloudAppSecurity?: CloudAppSecuritySessionControl | undefined;
    /** Session control that determines whether it is acceptable for Azure AD to extend existing sessions based on information collected prior to an outage or not. */
    private _disableResilienceDefaults?: boolean | undefined;
    /** Session control to define whether to persist cookies or not. All apps should be selected for this session control to work correctly. */
    private _persistentBrowser?: PersistentBrowserSessionControl | undefined;
    /** Session control to enforce signin frequency. */
    private _signInFrequency?: SignInFrequencySessionControl | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the applicationEnforcedRestrictions property value. Session control to enforce application restrictions. Only Exchange Online and Sharepoint Online support this session control.
     * @returns a ApplicationEnforcedRestrictionsSessionControlInterface
     */
    public get applicationEnforcedRestrictions() {
        return this._applicationEnforcedRestrictions;
    };
    /**
     * Sets the applicationEnforcedRestrictions property value. Session control to enforce application restrictions. Only Exchange Online and Sharepoint Online support this session control.
     * @param value Value to set for the applicationEnforcedRestrictions property.
     */
    public set applicationEnforcedRestrictions(value: ApplicationEnforcedRestrictionsSessionControl | undefined) {
        if(value) {
            this._applicationEnforcedRestrictions = value instanceof ApplicationEnforcedRestrictionsSessionControlImpl? value : new ApplicationEnforcedRestrictionsSessionControlImpl(value);
        }
    };
    /**
     * Gets the cloudAppSecurity property value. Session control to apply cloud app security.
     * @returns a CloudAppSecuritySessionControlInterface
     */
    public get cloudAppSecurity() {
        return this._cloudAppSecurity;
    };
    /**
     * Sets the cloudAppSecurity property value. Session control to apply cloud app security.
     * @param value Value to set for the cloudAppSecurity property.
     */
    public set cloudAppSecurity(value: CloudAppSecuritySessionControl | undefined) {
        if(value) {
            this._cloudAppSecurity = value instanceof CloudAppSecuritySessionControlImpl? value : new CloudAppSecuritySessionControlImpl(value);
        }
    };
    /**
     * Instantiates a new conditionalAccessSessionControls and sets the default values.
     * @param conditionalAccessSessionControlsParameterValue 
     */
    public constructor(conditionalAccessSessionControlsParameterValue?: ConditionalAccessSessionControls | undefined) {
        this._additionalData = conditionalAccessSessionControlsParameterValue?.additionalData ? conditionalAccessSessionControlsParameterValue?.additionalData! : {};
        this._applicationEnforcedRestrictions = conditionalAccessSessionControlsParameterValue?.applicationEnforcedRestrictions;
        this._cloudAppSecurity = conditionalAccessSessionControlsParameterValue?.cloudAppSecurity;
        this._disableResilienceDefaults = conditionalAccessSessionControlsParameterValue?.disableResilienceDefaults;
        this._persistentBrowser = conditionalAccessSessionControlsParameterValue?.persistentBrowser;
        this._signInFrequency = conditionalAccessSessionControlsParameterValue?.signInFrequency;
    };
    /**
     * Gets the disableResilienceDefaults property value. Session control that determines whether it is acceptable for Azure AD to extend existing sessions based on information collected prior to an outage or not.
     * @returns a boolean
     */
    public get disableResilienceDefaults() {
        return this._disableResilienceDefaults;
    };
    /**
     * Sets the disableResilienceDefaults property value. Session control that determines whether it is acceptable for Azure AD to extend existing sessions based on information collected prior to an outage or not.
     * @param value Value to set for the disableResilienceDefaults property.
     */
    public set disableResilienceDefaults(value: boolean | undefined) {
        if(value) {
            this._disableResilienceDefaults = value;
        }
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
     * Gets the persistentBrowser property value. Session control to define whether to persist cookies or not. All apps should be selected for this session control to work correctly.
     * @returns a PersistentBrowserSessionControlInterface
     */
    public get persistentBrowser() {
        return this._persistentBrowser;
    };
    /**
     * Sets the persistentBrowser property value. Session control to define whether to persist cookies or not. All apps should be selected for this session control to work correctly.
     * @param value Value to set for the persistentBrowser property.
     */
    public set persistentBrowser(value: PersistentBrowserSessionControl | undefined) {
        if(value) {
            this._persistentBrowser = value instanceof PersistentBrowserSessionControlImpl? value : new PersistentBrowserSessionControlImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.applicationEnforcedRestrictions){
            writer.writeObjectValue<ApplicationEnforcedRestrictionsSessionControlImpl>("applicationEnforcedRestrictions", (!this.applicationEnforcedRestrictions || this.applicationEnforcedRestrictions instanceof ApplicationEnforcedRestrictionsSessionControlImpl? this.applicationEnforcedRestrictions : new ApplicationEnforcedRestrictionsSessionControlImpl(this.applicationEnforcedRestrictions)));
        }
        if(this.cloudAppSecurity){
            writer.writeObjectValue<CloudAppSecuritySessionControlImpl>("cloudAppSecurity", (!this.cloudAppSecurity || this.cloudAppSecurity instanceof CloudAppSecuritySessionControlImpl? this.cloudAppSecurity : new CloudAppSecuritySessionControlImpl(this.cloudAppSecurity)));
        }
        if(this.disableResilienceDefaults){
            writer.writeBooleanValue("disableResilienceDefaults", this.disableResilienceDefaults);
        }
        if(this.persistentBrowser){
            writer.writeObjectValue<PersistentBrowserSessionControlImpl>("persistentBrowser", (!this.persistentBrowser || this.persistentBrowser instanceof PersistentBrowserSessionControlImpl? this.persistentBrowser : new PersistentBrowserSessionControlImpl(this.persistentBrowser)));
        }
        if(this.signInFrequency){
            writer.writeObjectValue<SignInFrequencySessionControlImpl>("signInFrequency", (!this.signInFrequency || this.signInFrequency instanceof SignInFrequencySessionControlImpl? this.signInFrequency : new SignInFrequencySessionControlImpl(this.signInFrequency)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the signInFrequency property value. Session control to enforce signin frequency.
     * @returns a SignInFrequencySessionControlInterface
     */
    public get signInFrequency() {
        return this._signInFrequency;
    };
    /**
     * Sets the signInFrequency property value. Session control to enforce signin frequency.
     * @param value Value to set for the signInFrequency property.
     */
    public set signInFrequency(value: SignInFrequencySessionControl | undefined) {
        if(value) {
            this._signInFrequency = value instanceof SignInFrequencySessionControlImpl? value : new SignInFrequencySessionControlImpl(value);
        }
    };
}
