import {createAttackSimulationUserFromDiscriminatorValue} from './createAttackSimulationUserFromDiscriminatorValue';
import {AttackSimulationUser} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttackSimulationSimulationUserCoverage implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** User in an attack simulation and training campaign. */
    private _attackSimulationUser?: AttackSimulationUser | undefined;
    /** Number of link clicks in the received payloads by the user in attack simulation and training campaigns. */
    private _clickCount?: number | undefined;
    /** Number of compromising actions by the user in attack simulation and training campaigns. */
    private _compromisedCount?: number | undefined;
    /** Date and time of the latest attack simulation and training campaign that the user was included in. */
    private _latestSimulationDateTime?: Date | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Number of attack simulation and training campaigns that the user was included in. */
    private _simulationCount?: number | undefined;
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
     * Gets the attackSimulationUser property value. User in an attack simulation and training campaign.
     * @returns a attackSimulationUser
     */
    public get attackSimulationUser() {
        return this._attackSimulationUser;
    };
    /**
     * Sets the attackSimulationUser property value. User in an attack simulation and training campaign.
     * @param value Value to set for the attackSimulationUser property.
     */
    public set attackSimulationUser(value: AttackSimulationUser | undefined) {
        this._attackSimulationUser = value;
    };
    /**
     * Gets the clickCount property value. Number of link clicks in the received payloads by the user in attack simulation and training campaigns.
     * @returns a integer
     */
    public get clickCount() {
        return this._clickCount;
    };
    /**
     * Sets the clickCount property value. Number of link clicks in the received payloads by the user in attack simulation and training campaigns.
     * @param value Value to set for the clickCount property.
     */
    public set clickCount(value: number | undefined) {
        this._clickCount = value;
    };
    /**
     * Gets the compromisedCount property value. Number of compromising actions by the user in attack simulation and training campaigns.
     * @returns a integer
     */
    public get compromisedCount() {
        return this._compromisedCount;
    };
    /**
     * Sets the compromisedCount property value. Number of compromising actions by the user in attack simulation and training campaigns.
     * @param value Value to set for the compromisedCount property.
     */
    public set compromisedCount(value: number | undefined) {
        this._compromisedCount = value;
    };
    /**
     * Instantiates a new attackSimulationSimulationUserCoverage and sets the default values.
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
            "attackSimulationUser": n => { this.attackSimulationUser = n.getObjectValue<AttackSimulationUser>(createAttackSimulationUserFromDiscriminatorValue); },
            "clickCount": n => { this.clickCount = n.getNumberValue(); },
            "compromisedCount": n => { this.compromisedCount = n.getNumberValue(); },
            "latestSimulationDateTime": n => { this.latestSimulationDateTime = n.getDateValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "simulationCount": n => { this.simulationCount = n.getNumberValue(); },
        };
    };
    /**
     * Gets the latestSimulationDateTime property value. Date and time of the latest attack simulation and training campaign that the user was included in.
     * @returns a Date
     */
    public get latestSimulationDateTime() {
        return this._latestSimulationDateTime;
    };
    /**
     * Sets the latestSimulationDateTime property value. Date and time of the latest attack simulation and training campaign that the user was included in.
     * @param value Value to set for the latestSimulationDateTime property.
     */
    public set latestSimulationDateTime(value: Date | undefined) {
        this._latestSimulationDateTime = value;
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
        writer.writeObjectValue<AttackSimulationUser>("attackSimulationUser", this.attackSimulationUser);
        writer.writeNumberValue("clickCount", this.clickCount);
        writer.writeNumberValue("compromisedCount", this.compromisedCount);
        writer.writeDateValue("latestSimulationDateTime", this.latestSimulationDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("simulationCount", this.simulationCount);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the simulationCount property value. Number of attack simulation and training campaigns that the user was included in.
     * @returns a integer
     */
    public get simulationCount() {
        return this._simulationCount;
    };
    /**
     * Sets the simulationCount property value. Number of attack simulation and training campaigns that the user was included in.
     * @param value Value to set for the simulationCount property.
     */
    public set simulationCount(value: number | undefined) {
        this._simulationCount = value;
    };
}