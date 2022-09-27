import {createAttackSimulationUserFromDiscriminatorValue} from './createAttackSimulationUserFromDiscriminatorValue';
import {AttackSimulationUser} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttackSimulationRepeatOffender implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The attackSimulationUser property */
    private _attackSimulationUser?: AttackSimulationUser | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The repeatOffenceCount property */
    private _repeatOffenceCount?: number | undefined;
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
     * Gets the attackSimulationUser property value. The attackSimulationUser property
     * @returns a attackSimulationUser
     */
    public get attackSimulationUser() {
        return this._attackSimulationUser;
    };
    /**
     * Sets the attackSimulationUser property value. The attackSimulationUser property
     * @param value Value to set for the attackSimulationUser property.
     */
    public set attackSimulationUser(value: AttackSimulationUser | undefined) {
        this._attackSimulationUser = value;
    };
    /**
     * Instantiates a new attackSimulationRepeatOffender and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.attackSimulationRepeatOffender";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "attackSimulationUser": n => { this.attackSimulationUser = n.getObjectValue<AttackSimulationUser>(createAttackSimulationUserFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "repeatOffenceCount": n => { this.repeatOffenceCount = n.getNumberValue(); },
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
     * Gets the repeatOffenceCount property value. The repeatOffenceCount property
     * @returns a integer
     */
    public get repeatOffenceCount() {
        return this._repeatOffenceCount;
    };
    /**
     * Sets the repeatOffenceCount property value. The repeatOffenceCount property
     * @param value Value to set for the repeatOffenceCount property.
     */
    public set repeatOffenceCount(value: number | undefined) {
        this._repeatOffenceCount = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AttackSimulationUser>("attackSimulationUser", this.attackSimulationUser);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("repeatOffenceCount", this.repeatOffenceCount);
        writer.writeAdditionalData(this.additionalData);
    };
}
