import {createRiskDetectionFromDiscriminatorValue} from './createRiskDetectionFromDiscriminatorValue';
import {createRiskyUserFromDiscriminatorValue} from './createRiskyUserFromDiscriminatorValue';
import {IdentityProtectionRoot} from './identityProtectionRoot';
import {RiskDetectionImpl, RiskyUserImpl} from './index';
import {RiskDetection} from './riskDetection';
import {RiskyUser} from './riskyUser';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityProtectionRootImpl implements IdentityProtectionRoot {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Risk detection in Azure AD Identity Protection and the associated information about the detection. */
    private _riskDetections?: RiskDetection[] | undefined;
    /** Users that are flagged as at-risk by Azure AD Identity Protection. */
    private _riskyUsers?: RiskyUser[] | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new IdentityProtectionRoot and sets the default values.
     * @param identityProtectionRootParameterValue 
     */
    public constructor(identityProtectionRootParameterValue?: IdentityProtectionRoot | undefined) {
        this._additionalData = identityProtectionRootParameterValue?.additionalData ? identityProtectionRootParameterValue?.additionalData! : {};
        this._riskDetections = identityProtectionRootParameterValue?.riskDetections;
        this._riskyUsers = identityProtectionRootParameterValue?.riskyUsers;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "riskDetections": n => { this.riskDetections = n.getCollectionOfObjectValues<RiskDetectionImpl>(createRiskDetectionFromDiscriminatorValue); },
            "riskyUsers": n => { this.riskyUsers = n.getCollectionOfObjectValues<RiskyUserImpl>(createRiskyUserFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the riskDetections property value. Risk detection in Azure AD Identity Protection and the associated information about the detection.
     * @returns a RiskDetectionInterface
     */
    public get riskDetections() {
        return this._riskDetections;
    };
    /**
     * Sets the riskDetections property value. Risk detection in Azure AD Identity Protection and the associated information about the detection.
     * @param value Value to set for the riskDetections property.
     */
    public set riskDetections(value: RiskDetection[] | undefined) {
        if(value) {
            const riskDetectionsArrValue: RiskDetectionImpl[] = [];
            this.riskDetections?.forEach(element => {
                riskDetectionsArrValue.push((element instanceof RiskDetectionImpl? element:new RiskDetectionImpl(element)));
            });
            this._riskDetections = riskDetectionsArrValue;
        }
    };
    /**
     * Gets the riskyUsers property value. Users that are flagged as at-risk by Azure AD Identity Protection.
     * @returns a RiskyUserInterface
     */
    public get riskyUsers() {
        return this._riskyUsers;
    };
    /**
     * Sets the riskyUsers property value. Users that are flagged as at-risk by Azure AD Identity Protection.
     * @param value Value to set for the riskyUsers property.
     */
    public set riskyUsers(value: RiskyUser[] | undefined) {
        if(value) {
            const riskyUsersArrValue: RiskyUserImpl[] = [];
            this.riskyUsers?.forEach(element => {
                riskyUsersArrValue.push((element instanceof RiskyUserImpl? element:new RiskyUserImpl(element)));
            });
            this._riskyUsers = riskyUsersArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.riskDetections && this.riskDetections.length != 0){        const riskDetectionsArrValue: RiskDetectionImpl[] = [];
        this.riskDetections?.forEach(element => {
            riskDetectionsArrValue.push((element instanceof RiskDetectionImpl? element:new RiskDetectionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RiskDetectionImpl>("riskDetections", riskDetectionsArrValue);
        }
        if(this.riskyUsers && this.riskyUsers.length != 0){        const riskyUsersArrValue: RiskyUserImpl[] = [];
        this.riskyUsers?.forEach(element => {
            riskyUsersArrValue.push((element instanceof RiskyUserImpl? element:new RiskyUserImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RiskyUserImpl>("riskyUsers", riskyUsersArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
