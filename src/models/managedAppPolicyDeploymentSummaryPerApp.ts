import {createMobileAppIdentifierFromDiscriminatorValue} from './createMobileAppIdentifierFromDiscriminatorValue';
import {MobileAppIdentifier} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents policy deployment summary per app. */
export class ManagedAppPolicyDeploymentSummaryPerApp implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Number of users the policy is applied. */
    private _configurationAppliedUserCount?: number | undefined;
    /** Deployment of an app. */
    private _mobileAppIdentifier?: MobileAppIdentifier | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
        this._additionalData = value;
    };
    /**
     * Gets the configurationAppliedUserCount property value. Number of users the policy is applied.
     * @returns a integer
     */
    public get configurationAppliedUserCount() {
        return this._configurationAppliedUserCount;
    };
    /**
     * Sets the configurationAppliedUserCount property value. Number of users the policy is applied.
     * @param value Value to set for the configurationAppliedUserCount property.
     */
    public set configurationAppliedUserCount(value: number | undefined) {
        this._configurationAppliedUserCount = value;
    };
    /**
     * Instantiates a new managedAppPolicyDeploymentSummaryPerApp and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.managedAppPolicyDeploymentSummaryPerApp";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "configurationAppliedUserCount": n => { this.configurationAppliedUserCount = n.getNumberValue(); },
            "mobileAppIdentifier": n => { this.mobileAppIdentifier = n.getObjectValue<MobileAppIdentifier>(createMobileAppIdentifierFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the mobileAppIdentifier property value. Deployment of an app.
     * @returns a mobileAppIdentifier
     */
    public get mobileAppIdentifier() {
        return this._mobileAppIdentifier;
    };
    /**
     * Sets the mobileAppIdentifier property value. Deployment of an app.
     * @param value Value to set for the mobileAppIdentifier property.
     */
    public set mobileAppIdentifier(value: MobileAppIdentifier | undefined) {
        this._mobileAppIdentifier = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("configurationAppliedUserCount", this.configurationAppliedUserCount);
        writer.writeObjectValue<MobileAppIdentifier>("mobileAppIdentifier", this.mobileAppIdentifier);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
