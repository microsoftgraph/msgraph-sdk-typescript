import {CrossTenantAccessPolicyTargetType} from './crossTenantAccessPolicyTargetType';
import {ApplicationsMember1} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CrossTenantAccessPolicyTarget implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The unique identifier of the user, group, or application; one of the following keywords: AllUsers and AllApplications; or for targets that are applications, you may use reserved values. */
    private _target?: string | undefined;
    /** The type of resource that you want to target. The possible values are: user, group, application, unknownFutureValue. */
    private _targetType?: CrossTenantAccessPolicyTargetType | ApplicationsMember1 | undefined;
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
     * Instantiates a new crossTenantAccessPolicyTarget and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "target": n => { this.target = n.getStringValue(); },
            "targetType": n => { this.targetType = n.getObjectValue<CrossTenantAccessPolicyTargetType>(createCrossTenantAccessPolicyTargetTypeFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("target", this.target);
        writer.writeObjectValue<CrossTenantAccessPolicyTargetType>("targetType", this.targetType);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the target property value. The unique identifier of the user, group, or application; one of the following keywords: AllUsers and AllApplications; or for targets that are applications, you may use reserved values.
     * @returns a string
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. The unique identifier of the user, group, or application; one of the following keywords: AllUsers and AllApplications; or for targets that are applications, you may use reserved values.
     * @param value Value to set for the target property.
     */
    public set target(value: string | undefined) {
        this._target = value;
    };
    /**
     * Gets the targetType property value. The type of resource that you want to target. The possible values are: user, group, application, unknownFutureValue.
     * @returns a applications
     */
    public get targetType() {
        return this._targetType;
    };
    /**
     * Sets the targetType property value. The type of resource that you want to target. The possible values are: user, group, application, unknownFutureValue.
     * @param value Value to set for the targetType property.
     */
    public set targetType(value: CrossTenantAccessPolicyTargetType | ApplicationsMember1 | undefined) {
        this._targetType = value;
    };
}
