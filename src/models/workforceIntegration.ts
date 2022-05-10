import {createWorkforceIntegrationEncryptionFromDiscriminatorValue} from './createWorkforceIntegrationEncryptionFromDiscriminatorValue';
import {ChangeTrackedEntity, WorkforceIntegrationEncryption} from './index';
import {WorkforceIntegrationSupportedEntities} from './workforceIntegrationSupportedEntities';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkforceIntegration extends ChangeTrackedEntity implements Parsable {
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
        this._apiVersion = value;
    };
    /**
     * Instantiates a new workforceIntegration and sets the default values.
     */
    public constructor() {
        super();
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
        this._displayName = value;
    };
    /**
     * Gets the encryption property value. The workforce integration encryption resource.
     * @returns a workforceIntegrationEncryption
     */
    public get encryption() {
        return this._encryption;
    };
    /**
     * Sets the encryption property value. The workforce integration encryption resource.
     * @param value Value to set for the encryption property.
     */
    public set encryption(value: WorkforceIntegrationEncryption | undefined) {
        this._encryption = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "apiVersion": n => { this.apiVersion = n.getNumberValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "encryption": n => { this.encryption = n.getObjectValue<WorkforceIntegrationEncryption>(createWorkforceIntegrationEncryptionFromDiscriminatorValue); },
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
        this._isActive = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("apiVersion", this.apiVersion);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<WorkforceIntegrationEncryption>("encryption", this.encryption);
        writer.writeBooleanValue("isActive", this.isActive);
        writer.writeEnumValue<WorkforceIntegrationSupportedEntities>("supportedEntities", this.supportedEntities);
        writer.writeStringValue("url", this.url);
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
        this._supportedEntities = value;
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
        this._url = value;
    };
}
