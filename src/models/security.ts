import {createAlertFromDiscriminatorValue} from './createAlertFromDiscriminatorValue';
import {createAttackSimulationRootFromDiscriminatorValue} from './createAttackSimulationRootFromDiscriminatorValue';
import {createSecureScoreControlProfileFromDiscriminatorValue} from './createSecureScoreControlProfileFromDiscriminatorValue';
import {createSecureScoreFromDiscriminatorValue} from './createSecureScoreFromDiscriminatorValue';
import {Alert, AttackSimulationRoot, Entity, SecureScore, SecureScoreControlProfile} from './index';
import {CasesRoot} from './security/';
import {createCasesRootFromDiscriminatorValue} from './security/createCasesRootFromDiscriminatorValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Security extends Entity implements Parsable {
    /** The alerts property */
    private _alerts?: Alert[] | undefined;
    /** The attackSimulation property */
    private _attackSimulation?: AttackSimulationRoot | undefined;
    /** The cases property */
    private _cases?: CasesRoot | undefined;
    /** The secureScoreControlProfiles property */
    private _secureScoreControlProfiles?: SecureScoreControlProfile[] | undefined;
    /** The secureScores property */
    private _secureScores?: SecureScore[] | undefined;
    /**
     * Gets the alerts property value. The alerts property
     * @returns a alert
     */
    public get alerts() {
        return this._alerts;
    };
    /**
     * Sets the alerts property value. The alerts property
     * @param value Value to set for the alerts property.
     */
    public set alerts(value: Alert[] | undefined) {
        this._alerts = value;
    };
    /**
     * Gets the attackSimulation property value. The attackSimulation property
     * @returns a attackSimulationRoot
     */
    public get attackSimulation() {
        return this._attackSimulation;
    };
    /**
     * Sets the attackSimulation property value. The attackSimulation property
     * @param value Value to set for the attackSimulation property.
     */
    public set attackSimulation(value: AttackSimulationRoot | undefined) {
        this._attackSimulation = value;
    };
    /**
     * Gets the cases property value. The cases property
     * @returns a casesRoot
     */
    public get cases() {
        return this._cases;
    };
    /**
     * Sets the cases property value. The cases property
     * @param value Value to set for the cases property.
     */
    public set cases(value: CasesRoot | undefined) {
        this._cases = value;
    };
    /**
     * Instantiates a new Security and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.security";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "alerts": n => { this.alerts = n.getCollectionOfObjectValues<Alert>(createAlertFromDiscriminatorValue); },
            "attackSimulation": n => { this.attackSimulation = n.getObjectValue<AttackSimulationRoot>(createAttackSimulationRootFromDiscriminatorValue); },
            "cases": n => { this.cases = n.getObjectValue<CasesRoot>(createCasesRootFromDiscriminatorValue); },
            "secureScoreControlProfiles": n => { this.secureScoreControlProfiles = n.getCollectionOfObjectValues<SecureScoreControlProfile>(createSecureScoreControlProfileFromDiscriminatorValue); },
            "secureScores": n => { this.secureScores = n.getCollectionOfObjectValues<SecureScore>(createSecureScoreFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the secureScoreControlProfiles property value. The secureScoreControlProfiles property
     * @returns a secureScoreControlProfile
     */
    public get secureScoreControlProfiles() {
        return this._secureScoreControlProfiles;
    };
    /**
     * Sets the secureScoreControlProfiles property value. The secureScoreControlProfiles property
     * @param value Value to set for the secureScoreControlProfiles property.
     */
    public set secureScoreControlProfiles(value: SecureScoreControlProfile[] | undefined) {
        this._secureScoreControlProfiles = value;
    };
    /**
     * Gets the secureScores property value. The secureScores property
     * @returns a secureScore
     */
    public get secureScores() {
        return this._secureScores;
    };
    /**
     * Sets the secureScores property value. The secureScores property
     * @param value Value to set for the secureScores property.
     */
    public set secureScores(value: SecureScore[] | undefined) {
        this._secureScores = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Alert>("alerts", this.alerts);
        writer.writeObjectValue<AttackSimulationRoot>("attackSimulation", this.attackSimulation);
        writer.writeObjectValue<CasesRoot>("cases", this.cases);
        writer.writeCollectionOfObjectValues<SecureScoreControlProfile>("secureScoreControlProfiles", this.secureScoreControlProfiles);
        writer.writeCollectionOfObjectValues<SecureScore>("secureScores", this.secureScores);
    };
}
