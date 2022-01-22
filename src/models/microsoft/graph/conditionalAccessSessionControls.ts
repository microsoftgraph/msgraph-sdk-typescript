import {ApplicationEnforcedRestrictionsSessionControl} from './applicationEnforcedRestrictionsSessionControl';
import {CloudAppSecuritySessionControl} from './cloudAppSecuritySessionControl';
import {PersistentBrowserSessionControl} from './persistentBrowserSessionControl';
import {SignInFrequencySessionControl} from './signInFrequencySessionControl';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessSessionControls implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Session control to enforce application restrictions. Only Exchange Online and Sharepoint Online support this session control.  */
    private _applicationEnforcedRestrictions?: ApplicationEnforcedRestrictionsSessionControl | undefined;
    /** Session control to apply cloud app security.  */
    private _cloudAppSecurity?: CloudAppSecuritySessionControl | undefined;
    /** Session control that determines whether it is acceptable for Azure AD to extend existing sessions based on information collected prior to an outage or not.  */
    private _disableResilienceDefaults?: boolean | undefined;
    /** Session control to define whether to persist cookies or not. All apps should be selected for this session control to work correctly.  */
    private _persistentBrowser?: PersistentBrowserSessionControl | undefined;
    /** Session control to enforce signin frequency.  */
    private _signInFrequency?: SignInFrequencySessionControl | undefined;
    /**
     * Instantiates a new conditionalAccessSessionControls and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the applicationEnforcedRestrictions property value. Session control to enforce application restrictions. Only Exchange Online and Sharepoint Online support this session control.
     * @returns a applicationEnforcedRestrictionsSessionControl
     */
    public get applicationEnforcedRestrictions() {
        return this._applicationEnforcedRestrictions;
    };
    /**
     * Gets the cloudAppSecurity property value. Session control to apply cloud app security.
     * @returns a cloudAppSecuritySessionControl
     */
    public get cloudAppSecurity() {
        return this._cloudAppSecurity;
    };
    /**
     * Gets the disableResilienceDefaults property value. Session control that determines whether it is acceptable for Azure AD to extend existing sessions based on information collected prior to an outage or not.
     * @returns a boolean
     */
    public get disableResilienceDefaults() {
        return this._disableResilienceDefaults;
    };
    /**
     * Gets the persistentBrowser property value. Session control to define whether to persist cookies or not. All apps should be selected for this session control to work correctly.
     * @returns a persistentBrowserSessionControl
     */
    public get persistentBrowser() {
        return this._persistentBrowser;
    };
    /**
     * Gets the signInFrequency property value. Session control to enforce signin frequency.
     * @returns a signInFrequencySessionControl
     */
    public get signInFrequency() {
        return this._signInFrequency;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["applicationEnforcedRestrictions", (o, n) => { (o as unknown as ConditionalAccessSessionControls).applicationEnforcedRestrictions = n.getObjectValue<ApplicationEnforcedRestrictionsSessionControl>(ApplicationEnforcedRestrictionsSessionControl); }],
            ["cloudAppSecurity", (o, n) => { (o as unknown as ConditionalAccessSessionControls).cloudAppSecurity = n.getObjectValue<CloudAppSecuritySessionControl>(CloudAppSecuritySessionControl); }],
            ["disableResilienceDefaults", (o, n) => { (o as unknown as ConditionalAccessSessionControls).disableResilienceDefaults = n.getBooleanValue(); }],
            ["persistentBrowser", (o, n) => { (o as unknown as ConditionalAccessSessionControls).persistentBrowser = n.getObjectValue<PersistentBrowserSessionControl>(PersistentBrowserSessionControl); }],
            ["signInFrequency", (o, n) => { (o as unknown as ConditionalAccessSessionControls).signInFrequency = n.getObjectValue<SignInFrequencySessionControl>(SignInFrequencySessionControl); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ApplicationEnforcedRestrictionsSessionControl>("applicationEnforcedRestrictions", this.applicationEnforcedRestrictions);
        writer.writeObjectValue<CloudAppSecuritySessionControl>("cloudAppSecurity", this.cloudAppSecurity);
        writer.writeBooleanValue("disableResilienceDefaults", this.disableResilienceDefaults);
        writer.writeObjectValue<PersistentBrowserSessionControl>("persistentBrowser", this.persistentBrowser);
        writer.writeObjectValue<SignInFrequencySessionControl>("signInFrequency", this.signInFrequency);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the applicationEnforcedRestrictions property value. Session control to enforce application restrictions. Only Exchange Online and Sharepoint Online support this session control.
     * @param value Value to set for the applicationEnforcedRestrictions property.
     */
    public set applicationEnforcedRestrictions(value: ApplicationEnforcedRestrictionsSessionControl | undefined) {
        this._applicationEnforcedRestrictions = value;
    };
    /**
     * Sets the cloudAppSecurity property value. Session control to apply cloud app security.
     * @param value Value to set for the cloudAppSecurity property.
     */
    public set cloudAppSecurity(value: CloudAppSecuritySessionControl | undefined) {
        this._cloudAppSecurity = value;
    };
    /**
     * Sets the disableResilienceDefaults property value. Session control that determines whether it is acceptable for Azure AD to extend existing sessions based on information collected prior to an outage or not.
     * @param value Value to set for the disableResilienceDefaults property.
     */
    public set disableResilienceDefaults(value: boolean | undefined) {
        this._disableResilienceDefaults = value;
    };
    /**
     * Sets the persistentBrowser property value. Session control to define whether to persist cookies or not. All apps should be selected for this session control to work correctly.
     * @param value Value to set for the persistentBrowser property.
     */
    public set persistentBrowser(value: PersistentBrowserSessionControl | undefined) {
        this._persistentBrowser = value;
    };
    /**
     * Sets the signInFrequency property value. Session control to enforce signin frequency.
     * @param value Value to set for the signInFrequency property.
     */
    public set signInFrequency(value: SignInFrequencySessionControl | undefined) {
        this._signInFrequency = value;
    };
}
