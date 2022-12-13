import {createAlertFromDiscriminatorValue as I1cb3f0565cf1eaf3d4684f805b8ff85c0f5befafa3890fbd5b7417da601b6295} from './createAlertFromDiscriminatorValue';
import {createAttackSimulationRootFromDiscriminatorValue} from './createAttackSimulationRootFromDiscriminatorValue';
import {createSecureScoreControlProfileFromDiscriminatorValue} from './createSecureScoreControlProfileFromDiscriminatorValue';
import {createSecureScoreFromDiscriminatorValue} from './createSecureScoreFromDiscriminatorValue';
import {Alert as Ifc3dd46d8c20580598e3887e951736840b38f25b65d12c7df595f8b23d2eeae5, AttackSimulationRoot, Entity, SecureScore, SecureScoreControlProfile} from './index';
import {Alert as I6c6ea9cf476c9a2686ab81fd2ae38bdf3364559b2c5107ca7a29ad7bcf95e5a8, CasesRoot, Incident} from './security/';
import {createAlertFromDiscriminatorValue as Ic3df26bb503216c70f1b1537fb1cb7605d034f17f11b693448013e01824d59a7} from './security/createAlertFromDiscriminatorValue';
import {createCasesRootFromDiscriminatorValue} from './security/createCasesRootFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './security/createIncidentFromDiscriminatorValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Security extends Entity implements Parsable {
    /** The alerts property */
    private _alerts?: Ifc3dd46d8c20580598e3887e951736840b38f25b65d12c7df595f8b23d2eeae5[] | undefined;
    /** The alerts_v2 property */
    private _alerts_v2?: I6c6ea9cf476c9a2686ab81fd2ae38bdf3364559b2c5107ca7a29ad7bcf95e5a8[] | undefined;
    /** The attackSimulation property */
    private _attackSimulation?: AttackSimulationRoot | undefined;
    /** The cases property */
    private _cases?: CasesRoot | undefined;
    /** The incidents property */
    private _incidents?: Incident[] | undefined;
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
    public set alerts(value: Ifc3dd46d8c20580598e3887e951736840b38f25b65d12c7df595f8b23d2eeae5[] | undefined) {
        this._alerts = value;
    };
    /**
     * Gets the alerts_v2 property value. The alerts_v2 property
     * @returns a alert
     */
    public get alerts_v2() {
        return this._alerts_v2;
    };
    /**
     * Sets the alerts_v2 property value. The alerts_v2 property
     * @param value Value to set for the alerts_v2 property.
     */
    public set alerts_v2(value: I6c6ea9cf476c9a2686ab81fd2ae38bdf3364559b2c5107ca7a29ad7bcf95e5a8[] | undefined) {
        this._alerts_v2 = value;
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
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "alerts": n => { this.alerts = n.getCollectionOfObjectValues<Ifc3dd46d8c20580598e3887e951736840b38f25b65d12c7df595f8b23d2eeae5>(I1cb3f0565cf1eaf3d4684f805b8ff85c0f5befafa3890fbd5b7417da601b6295); },
            "alerts_v2": n => { this.alerts_v2 = n.getCollectionOfObjectValues<I6c6ea9cf476c9a2686ab81fd2ae38bdf3364559b2c5107ca7a29ad7bcf95e5a8>(Ic3df26bb503216c70f1b1537fb1cb7605d034f17f11b693448013e01824d59a7); },
            "attackSimulation": n => { this.attackSimulation = n.getObjectValue<AttackSimulationRoot>(createAttackSimulationRootFromDiscriminatorValue); },
            "cases": n => { this.cases = n.getObjectValue<CasesRoot>(createCasesRootFromDiscriminatorValue); },
            "incidents": n => { this.incidents = n.getCollectionOfObjectValues<Incident>(createIncidentFromDiscriminatorValue); },
            "secureScoreControlProfiles": n => { this.secureScoreControlProfiles = n.getCollectionOfObjectValues<SecureScoreControlProfile>(createSecureScoreControlProfileFromDiscriminatorValue); },
            "secureScores": n => { this.secureScores = n.getCollectionOfObjectValues<SecureScore>(createSecureScoreFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the incidents property value. The incidents property
     * @returns a incident
     */
    public get incidents() {
        return this._incidents;
    };
    /**
     * Sets the incidents property value. The incidents property
     * @param value Value to set for the incidents property.
     */
    public set incidents(value: Incident[] | undefined) {
        this._incidents = value;
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
        writer.writeCollectionOfObjectValues<Ifc3dd46d8c20580598e3887e951736840b38f25b65d12c7df595f8b23d2eeae5>("alerts", this.alerts);
        writer.writeCollectionOfObjectValues<I6c6ea9cf476c9a2686ab81fd2ae38bdf3364559b2c5107ca7a29ad7bcf95e5a8>("alerts_v2", this.alerts_v2);
        writer.writeObjectValue<AttackSimulationRoot>("attackSimulation", this.attackSimulation);
        writer.writeObjectValue<CasesRoot>("cases", this.cases);
        writer.writeCollectionOfObjectValues<Incident>("incidents", this.incidents);
        writer.writeCollectionOfObjectValues<SecureScoreControlProfile>("secureScoreControlProfiles", this.secureScoreControlProfiles);
        writer.writeCollectionOfObjectValues<SecureScore>("secureScores", this.secureScores);
    };
}
