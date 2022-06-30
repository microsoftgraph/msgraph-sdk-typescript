import {Alert} from './alert';
import {createAlertFromDiscriminatorValue} from './createAlertFromDiscriminatorValue';
import {createSecureScoreControlProfileFromDiscriminatorValue} from './createSecureScoreControlProfileFromDiscriminatorValue';
import {createSecureScoreFromDiscriminatorValue} from './createSecureScoreFromDiscriminatorValue';
import {AlertImpl, EntityImpl, SecureScoreControlProfileImpl, SecureScoreImpl} from './index';
import {SecureScore} from './secureScore';
import {SecureScoreControlProfile} from './secureScoreControlProfile';
import {Security} from './security';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the security singleton. */
export class SecurityImpl extends EntityImpl implements Security {
    /** Notifications for suspicious or potential security issues in a customer’s tenant. */
    private _alerts?: Alert[] | undefined;
    /** The secureScoreControlProfiles property */
    private _secureScoreControlProfiles?: SecureScoreControlProfile[] | undefined;
    /** The secureScores property */
    private _secureScores?: SecureScore[] | undefined;
    /**
     * Gets the alerts property value. Notifications for suspicious or potential security issues in a customer’s tenant.
     * @returns a AlertInterface
     */
    public get alerts() {
        return this._alerts;
    };
    /**
     * Sets the alerts property value. Notifications for suspicious or potential security issues in a customer’s tenant.
     * @param value Value to set for the alerts property.
     */
    public set alerts(value: Alert[] | undefined) {
        if(value) {
            const alertsArrValue: AlertImpl[] = [];
            this.alerts?.forEach(element => {
                alertsArrValue.push((element instanceof AlertImpl? element:new AlertImpl(element)));
            });
            this._alerts = alertsArrValue;
        }
    };
    /**
     * Instantiates a new security and sets the default values.
     * @param securityParameterValue 
     */
    public constructor(securityParameterValue?: Security | undefined) {
        super(securityParameterValue);
        this._alerts = securityParameterValue?.alerts;
        this._secureScoreControlProfiles = securityParameterValue?.secureScoreControlProfiles;
        this._secureScores = securityParameterValue?.secureScores;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "alerts": n => { this.alerts = n.getCollectionOfObjectValues<AlertImpl>(createAlertFromDiscriminatorValue); },
            "secureScoreControlProfiles": n => { this.secureScoreControlProfiles = n.getCollectionOfObjectValues<SecureScoreControlProfileImpl>(createSecureScoreControlProfileFromDiscriminatorValue); },
            "secureScores": n => { this.secureScores = n.getCollectionOfObjectValues<SecureScoreImpl>(createSecureScoreFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the secureScoreControlProfiles property value. The secureScoreControlProfiles property
     * @returns a SecureScoreControlProfileInterface
     */
    public get secureScoreControlProfiles() {
        return this._secureScoreControlProfiles;
    };
    /**
     * Sets the secureScoreControlProfiles property value. The secureScoreControlProfiles property
     * @param value Value to set for the secureScoreControlProfiles property.
     */
    public set secureScoreControlProfiles(value: SecureScoreControlProfile[] | undefined) {
        if(value) {
            const secureScoreControlProfilesArrValue: SecureScoreControlProfileImpl[] = [];
            this.secureScoreControlProfiles?.forEach(element => {
                secureScoreControlProfilesArrValue.push((element instanceof SecureScoreControlProfileImpl? element:new SecureScoreControlProfileImpl(element)));
            });
            this._secureScoreControlProfiles = secureScoreControlProfilesArrValue;
        }
    };
    /**
     * Gets the secureScores property value. The secureScores property
     * @returns a SecureScoreInterface
     */
    public get secureScores() {
        return this._secureScores;
    };
    /**
     * Sets the secureScores property value. The secureScores property
     * @param value Value to set for the secureScores property.
     */
    public set secureScores(value: SecureScore[] | undefined) {
        if(value) {
            const secureScoresArrValue: SecureScoreImpl[] = [];
            this.secureScores?.forEach(element => {
                secureScoresArrValue.push((element instanceof SecureScoreImpl? element:new SecureScoreImpl(element)));
            });
            this._secureScores = secureScoresArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.alerts && this.alerts.length != 0){        const alertsArrValue: AlertImpl[] = [];
        this.alerts?.forEach(element => {
            alertsArrValue.push((element instanceof AlertImpl? element:new AlertImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AlertImpl>("alerts", alertsArrValue);
        }
        if(this.secureScoreControlProfiles && this.secureScoreControlProfiles.length != 0){        const secureScoreControlProfilesArrValue: SecureScoreControlProfileImpl[] = [];
        this.secureScoreControlProfiles?.forEach(element => {
            secureScoreControlProfilesArrValue.push((element instanceof SecureScoreControlProfileImpl? element:new SecureScoreControlProfileImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SecureScoreControlProfileImpl>("secureScoreControlProfiles", secureScoreControlProfilesArrValue);
        }
        if(this.secureScores && this.secureScores.length != 0){        const secureScoresArrValue: SecureScoreImpl[] = [];
        this.secureScores?.forEach(element => {
            secureScoresArrValue.push((element instanceof SecureScoreImpl? element:new SecureScoreImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SecureScoreImpl>("secureScores", secureScoresArrValue);
        }
    };
}
