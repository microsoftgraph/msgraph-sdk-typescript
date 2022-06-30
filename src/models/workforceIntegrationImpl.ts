import {createWorkforceIntegrationEncryptionFromDiscriminatorValue} from './createWorkforceIntegrationEncryptionFromDiscriminatorValue';
import {ChangeTrackedEntityImpl, WorkforceIntegrationEncryptionImpl} from './index';
import {WorkforceIntegration} from './workforceIntegration';
import {WorkforceIntegrationEncryption} from './workforceIntegrationEncryption';
import {WorkforceIntegrationSupportedEntities} from './workforceIntegrationSupportedEntities';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkforceIntegrationImpl extends ChangeTrackedEntityImpl implements WorkforceIntegration {
    /** API version for the call back URL. Start with 1. */
    private _apiVersion?: number | undefined;
    /** Name of the workforce integration. */
    private _displayName?: string | undefined;
    /** The workforce integration encryption resource. */
    private _encryption?: WorkforceIntegrationEncryption | undefined;
    /** Indicates whether this workforce integration is currently active and available. */
    private _isActive?: boolean | undefined;
    /** This property has replaced supports in v1.0. We recommend that you use this property instead of supports. The supports property is still supported in beta for the time being. The possible values are: none, shift, swapRequest, openshift, openShiftRequest, userShiftPreferences, offerShiftRequest, unknownFutureValue, timeCard, timeOffReason, timeOff, timeOffRequest. Note that you must use the Prefer: include-unknown-enum-members request header to get the following values in this evolvable enum: timeCard, timeOffReason, timeOff, timeOffRequest. If selecting more than one value, all values must start with the first letter in uppercase. */
    private _supportedEntities?: WorkforceIntegrationSupportedEntities | undefined;
    /** Workforce Integration URL for callbacks from the Shifts service. */
    private _url?: string | undefined;
    /**
     * Gets the apiVersion property value. API version for the call back URL. Start with 1.
     * @returns a integer
     */
    public get apiVersion() {
        return this._apiVersion;
    };
    /**
     * Sets the apiVersion property value. API version for the call back URL. Start with 1.
     * @param value Value to set for the apiVersion property.
     */
    public set apiVersion(value: number | undefined) {
        if(value) {
            this._apiVersion = value;
        }
    };
    /**
     * Instantiates a new WorkforceIntegration and sets the default values.
     * @param workforceIntegrationParameterValue 
     */
    public constructor(workforceIntegrationParameterValue?: WorkforceIntegration | undefined) {
        super(workforceIntegrationParameterValue);
        this._apiVersion = workforceIntegrationParameterValue?.apiVersion;
        this._displayName = workforceIntegrationParameterValue?.displayName;
        this._encryption = workforceIntegrationParameterValue?.encryption;
        this._isActive = workforceIntegrationParameterValue?.isActive;
        this._supportedEntities = workforceIntegrationParameterValue?.supportedEntities;
        this._url = workforceIntegrationParameterValue?.url;
    };
    /**
     * Gets the displayName property value. Name of the workforce integration.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the workforce integration.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the encryption property value. The workforce integration encryption resource.
     * @returns a WorkforceIntegrationEncryptionInterface
     */
    public get encryption() {
        return this._encryption;
    };
    /**
     * Sets the encryption property value. The workforce integration encryption resource.
     * @param value Value to set for the encryption property.
     */
    public set encryption(value: WorkforceIntegrationEncryption | undefined) {
        if(value) {
            this._encryption = value instanceof WorkforceIntegrationEncryptionImpl? value : new WorkforceIntegrationEncryptionImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "apiVersion": n => { this.apiVersion = n.getNumberValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "encryption": n => { this.encryption = n.getObjectValue<WorkforceIntegrationEncryptionImpl>(createWorkforceIntegrationEncryptionFromDiscriminatorValue); },
            "isActive": n => { this.isActive = n.getBooleanValue(); },
            "supportedEntities": n => { this.supportedEntities = n.getEnumValue<WorkforceIntegrationSupportedEntities>(WorkforceIntegrationSupportedEntities); },
            "url": n => { this.url = n.getStringValue(); },
        };
    };
    /**
     * Gets the isActive property value. Indicates whether this workforce integration is currently active and available.
     * @returns a boolean
     */
    public get isActive() {
        return this._isActive;
    };
    /**
     * Sets the isActive property value. Indicates whether this workforce integration is currently active and available.
     * @param value Value to set for the isActive property.
     */
    public set isActive(value: boolean | undefined) {
        if(value) {
            this._isActive = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.apiVersion){
            writer.writeNumberValue("apiVersion", this.apiVersion);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.encryption){
            writer.writeObjectValue<WorkforceIntegrationEncryptionImpl>("encryption", (!this.encryption || this.encryption instanceof WorkforceIntegrationEncryptionImpl? this.encryption : new WorkforceIntegrationEncryptionImpl(this.encryption)));
        }
        if(this.isActive){
            writer.writeBooleanValue("isActive", this.isActive);
        }
        if(this.supportedEntities){
            writer.writeEnumValue<WorkforceIntegrationSupportedEntities>("supportedEntities", this.supportedEntities);
        }
        if(this.url){
            writer.writeStringValue("url", this.url);
        }
    };
    /**
     * Gets the supportedEntities property value. This property has replaced supports in v1.0. We recommend that you use this property instead of supports. The supports property is still supported in beta for the time being. The possible values are: none, shift, swapRequest, openshift, openShiftRequest, userShiftPreferences, offerShiftRequest, unknownFutureValue, timeCard, timeOffReason, timeOff, timeOffRequest. Note that you must use the Prefer: include-unknown-enum-members request header to get the following values in this evolvable enum: timeCard, timeOffReason, timeOff, timeOffRequest. If selecting more than one value, all values must start with the first letter in uppercase.
     * @returns a workforceIntegrationSupportedEntities
     */
    public get supportedEntities() {
        return this._supportedEntities;
    };
    /**
     * Sets the supportedEntities property value. This property has replaced supports in v1.0. We recommend that you use this property instead of supports. The supports property is still supported in beta for the time being. The possible values are: none, shift, swapRequest, openshift, openShiftRequest, userShiftPreferences, offerShiftRequest, unknownFutureValue, timeCard, timeOffReason, timeOff, timeOffRequest. Note that you must use the Prefer: include-unknown-enum-members request header to get the following values in this evolvable enum: timeCard, timeOffReason, timeOff, timeOffRequest. If selecting more than one value, all values must start with the first letter in uppercase.
     * @param value Value to set for the supportedEntities property.
     */
    public set supportedEntities(value: WorkforceIntegrationSupportedEntities | undefined) {
        if(value) {
            this._supportedEntities = value;
        }
    };
    /**
     * Gets the url property value. Workforce Integration URL for callbacks from the Shifts service.
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. Workforce Integration URL for callbacks from the Shifts service.
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        if(value) {
            this._url = value;
        }
    };
}
