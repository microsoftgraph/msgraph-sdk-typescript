import {createAttackSimulationUserFromDiscriminatorValue} from './createAttackSimulationUserFromDiscriminatorValue';
import {createUserTrainingStatusInfoFromDiscriminatorValue} from './createUserTrainingStatusInfoFromDiscriminatorValue';
import {AttackSimulationUser, UserTrainingStatusInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttackSimulationTrainingUserCoverage implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The attackSimulationUser property */
    private _attackSimulationUser?: AttackSimulationUser | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The userTrainings property */
    private _userTrainings?: UserTrainingStatusInfo[] | undefined;
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
     * Instantiates a new attackSimulationTrainingUserCoverage and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.attackSimulationTrainingUserCoverage";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "attackSimulationUser": n => { this.attackSimulationUser = n.getObjectValue<AttackSimulationUser>(createAttackSimulationUserFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "userTrainings": n => { this.userTrainings = n.getCollectionOfObjectValues<UserTrainingStatusInfo>(createUserTrainingStatusInfoFromDiscriminatorValue); },
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
        writer.writeObjectValue<AttackSimulationUser>("attackSimulationUser", this.attackSimulationUser);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<UserTrainingStatusInfo>("userTrainings", this.userTrainings);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the userTrainings property value. The userTrainings property
     * @returns a userTrainingStatusInfo
     */
    public get userTrainings() {
        return this._userTrainings;
    };
    /**
     * Sets the userTrainings property value. The userTrainings property
     * @param value Value to set for the userTrainings property.
     */
    public set userTrainings(value: UserTrainingStatusInfo[] | undefined) {
        this._userTrainings = value;
    };
}