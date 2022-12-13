import {createRiskDetectionFromDiscriminatorValue} from './createRiskDetectionFromDiscriminatorValue';
import {createRiskyServicePrincipalFromDiscriminatorValue} from './createRiskyServicePrincipalFromDiscriminatorValue';
import {createRiskyUserFromDiscriminatorValue} from './createRiskyUserFromDiscriminatorValue';
import {createServicePrincipalRiskDetectionFromDiscriminatorValue} from './createServicePrincipalRiskDetectionFromDiscriminatorValue';
import {RiskDetection, RiskyServicePrincipal, RiskyUser, ServicePrincipalRiskDetection} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityProtectionRoot implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Risk detection in Azure AD Identity Protection and the associated information about the detection. */
    private _riskDetections?: RiskDetection[] | undefined;
    /** Azure AD service principals that are at risk. */
    private _riskyServicePrincipals?: RiskyServicePrincipal[] | undefined;
    /** Users that are flagged as at-risk by Azure AD Identity Protection. */
    private _riskyUsers?: RiskyUser[] | undefined;
    /** Represents information about detected at-risk service principals in an Azure AD tenant. */
    private _servicePrincipalRiskDetections?: ServicePrincipalRiskDetection[] | undefined;
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
     * Instantiates a new IdentityProtectionRoot and sets the default values.
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "riskDetections": n => { this.riskDetections = n.getCollectionOfObjectValues<RiskDetection>(createRiskDetectionFromDiscriminatorValue); },
            "riskyServicePrincipals": n => { this.riskyServicePrincipals = n.getCollectionOfObjectValues<RiskyServicePrincipal>(createRiskyServicePrincipalFromDiscriminatorValue); },
            "riskyUsers": n => { this.riskyUsers = n.getCollectionOfObjectValues<RiskyUser>(createRiskyUserFromDiscriminatorValue); },
            "servicePrincipalRiskDetections": n => { this.servicePrincipalRiskDetections = n.getCollectionOfObjectValues<ServicePrincipalRiskDetection>(createServicePrincipalRiskDetectionFromDiscriminatorValue); },
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
     * Gets the riskDetections property value. Risk detection in Azure AD Identity Protection and the associated information about the detection.
     * @returns a riskDetection
     */
    public get riskDetections() {
        return this._riskDetections;
    };
    /**
     * Sets the riskDetections property value. Risk detection in Azure AD Identity Protection and the associated information about the detection.
     * @param value Value to set for the riskDetections property.
     */
    public set riskDetections(value: RiskDetection[] | undefined) {
        this._riskDetections = value;
    };
    /**
     * Gets the riskyServicePrincipals property value. Azure AD service principals that are at risk.
     * @returns a riskyServicePrincipal
     */
    public get riskyServicePrincipals() {
        return this._riskyServicePrincipals;
    };
    /**
     * Sets the riskyServicePrincipals property value. Azure AD service principals that are at risk.
     * @param value Value to set for the riskyServicePrincipals property.
     */
    public set riskyServicePrincipals(value: RiskyServicePrincipal[] | undefined) {
        this._riskyServicePrincipals = value;
    };
    /**
     * Gets the riskyUsers property value. Users that are flagged as at-risk by Azure AD Identity Protection.
     * @returns a riskyUser
     */
    public get riskyUsers() {
        return this._riskyUsers;
    };
    /**
     * Sets the riskyUsers property value. Users that are flagged as at-risk by Azure AD Identity Protection.
     * @param value Value to set for the riskyUsers property.
     */
    public set riskyUsers(value: RiskyUser[] | undefined) {
        this._riskyUsers = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<RiskDetection>("riskDetections", this.riskDetections);
        writer.writeCollectionOfObjectValues<RiskyServicePrincipal>("riskyServicePrincipals", this.riskyServicePrincipals);
        writer.writeCollectionOfObjectValues<RiskyUser>("riskyUsers", this.riskyUsers);
        writer.writeCollectionOfObjectValues<ServicePrincipalRiskDetection>("servicePrincipalRiskDetections", this.servicePrincipalRiskDetections);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the servicePrincipalRiskDetections property value. Represents information about detected at-risk service principals in an Azure AD tenant.
     * @returns a servicePrincipalRiskDetection
     */
    public get servicePrincipalRiskDetections() {
        return this._servicePrincipalRiskDetections;
    };
    /**
     * Sets the servicePrincipalRiskDetections property value. Represents information about detected at-risk service principals in an Azure AD tenant.
     * @param value Value to set for the servicePrincipalRiskDetections property.
     */
    public set servicePrincipalRiskDetections(value: ServicePrincipalRiskDetection[] | undefined) {
        this._servicePrincipalRiskDetections = value;
    };
}
