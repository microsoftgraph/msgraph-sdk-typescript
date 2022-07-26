import {createCrossTenantAccessPolicyTargetFromDiscriminatorValue} from './createCrossTenantAccessPolicyTargetFromDiscriminatorValue';
import {CrossTenantAccessPolicyTargetConfigurationAccessType} from './crossTenantAccessPolicyTargetConfigurationAccessType';
import {CrossTenantAccessPolicyTarget} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CrossTenantAccessPolicyTargetConfiguration implements AdditionalDataHolder, Parsable {
    /** Defines whether access is allowed or blocked. The possible values are: allowed, blocked, unknownFutureValue. */
    private _accessType?: CrossTenantAccessPolicyTargetConfigurationAccessType | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Specifies whether to target users, groups, or applications with this rule. */
    private _targets?: CrossTenantAccessPolicyTarget[] | undefined;
    /**
     * Gets the accessType property value. Defines whether access is allowed or blocked. The possible values are: allowed, blocked, unknownFutureValue.
     * @returns a crossTenantAccessPolicyTargetConfigurationAccessType
     */
    public get accessType() {
        return this._accessType;
    };
    /**
     * Sets the accessType property value. Defines whether access is allowed or blocked. The possible values are: allowed, blocked, unknownFutureValue.
     * @param value Value to set for the accessType property.
     */
    public set accessType(value: CrossTenantAccessPolicyTargetConfigurationAccessType | undefined) {
        this._accessType = value;
    };
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
     * Instantiates a new crossTenantAccessPolicyTargetConfiguration and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.crossTenantAccessPolicyTargetConfiguration";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "accessType": n => { this.accessType = n.getEnumValue<CrossTenantAccessPolicyTargetConfigurationAccessType>(CrossTenantAccessPolicyTargetConfigurationAccessType); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "targets": n => { this.targets = n.getCollectionOfObjectValues<CrossTenantAccessPolicyTarget>(createCrossTenantAccessPolicyTargetFromDiscriminatorValue); },
        };
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
        writer.writeEnumValue<CrossTenantAccessPolicyTargetConfigurationAccessType>("accessType", this.accessType);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<CrossTenantAccessPolicyTarget>("targets", this.targets);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the targets property value. Specifies whether to target users, groups, or applications with this rule.
     * @returns a crossTenantAccessPolicyTarget
     */
    public get targets() {
        return this._targets;
    };
    /**
     * Sets the targets property value. Specifies whether to target users, groups, or applications with this rule.
     * @param value Value to set for the targets property.
     */
    public set targets(value: CrossTenantAccessPolicyTarget[] | undefined) {
        this._targets = value;
    };
}
