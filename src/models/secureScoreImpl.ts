import {AverageComparativeScore} from './averageComparativeScore';
import {ControlScore} from './controlScore';
import {createAverageComparativeScoreFromDiscriminatorValue} from './createAverageComparativeScoreFromDiscriminatorValue';
import {createControlScoreFromDiscriminatorValue} from './createControlScoreFromDiscriminatorValue';
import {createSecurityVendorInformationFromDiscriminatorValue} from './createSecurityVendorInformationFromDiscriminatorValue';
import {AverageComparativeScoreImpl, ControlScoreImpl, EntityImpl, SecurityVendorInformationImpl} from './index';
import {SecureScore} from './secureScore';
import {SecurityVendorInformation} from './securityVendorInformation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the security singleton. */
export class SecureScoreImpl extends EntityImpl implements SecureScore {
    /** Active user count of the given tenant. */
    private _activeUserCount?: number | undefined;
    /** Average score by different scopes (for example, average by industry, average by seating) and control category (Identity, Data, Device, Apps, Infrastructure) within the scope. */
    private _averageComparativeScores?: AverageComparativeScore[] | undefined;
    /** GUID string for tenant ID. */
    private _azureTenantId?: string | undefined;
    /** Contains tenant scores for a set of controls. */
    private _controlScores?: ControlScore[] | undefined;
    /** The date when the entity is created. */
    private _createdDateTime?: Date | undefined;
    /** Tenant current attained score on specified date. */
    private _currentScore?: number | undefined;
    /** Microsoft-provided services for the tenant (for example, Exchange online, Skype, SharePoint). */
    private _enabledServices?: string[] | undefined;
    /** Licensed user count of the given tenant. */
    private _licensedUserCount?: number | undefined;
    /** Tenant maximum possible score on specified date. */
    private _maxScore?: number | undefined;
    /** Complex type containing details about the security product/service vendor, provider, and subprovider (for example, vendor=Microsoft; provider=SecureScore). Required. */
    private _vendorInformation?: SecurityVendorInformation | undefined;
    /**
     * Gets the activeUserCount property value. Active user count of the given tenant.
     * @returns a integer
     */
    public get activeUserCount() {
        return this._activeUserCount;
    };
    /**
     * Sets the activeUserCount property value. Active user count of the given tenant.
     * @param value Value to set for the activeUserCount property.
     */
    public set activeUserCount(value: number | undefined) {
        if(value) {
            this._activeUserCount = value;
        }
    };
    /**
     * Gets the averageComparativeScores property value. Average score by different scopes (for example, average by industry, average by seating) and control category (Identity, Data, Device, Apps, Infrastructure) within the scope.
     * @returns a AverageComparativeScoreInterface
     */
    public get averageComparativeScores() {
        return this._averageComparativeScores;
    };
    /**
     * Sets the averageComparativeScores property value. Average score by different scopes (for example, average by industry, average by seating) and control category (Identity, Data, Device, Apps, Infrastructure) within the scope.
     * @param value Value to set for the averageComparativeScores property.
     */
    public set averageComparativeScores(value: AverageComparativeScore[] | undefined) {
        if(value) {
            const averageComparativeScoresArrValue: AverageComparativeScoreImpl[] = [];
            this.averageComparativeScores?.forEach(element => {
                averageComparativeScoresArrValue.push((element instanceof AverageComparativeScoreImpl? element as AverageComparativeScoreImpl:new AverageComparativeScoreImpl(element)));
            });
            this._averageComparativeScores = averageComparativeScoresArrValue;
        }
    };
    /**
     * Gets the azureTenantId property value. GUID string for tenant ID.
     * @returns a string
     */
    public get azureTenantId() {
        return this._azureTenantId;
    };
    /**
     * Sets the azureTenantId property value. GUID string for tenant ID.
     * @param value Value to set for the azureTenantId property.
     */
    public set azureTenantId(value: string | undefined) {
        if(value) {
            this._azureTenantId = value;
        }
    };
    /**
     * Instantiates a new secureScore and sets the default values.
     * @param secureScoreParameterValue 
     */
    public constructor(secureScoreParameterValue?: SecureScore | undefined) {
        super(secureScoreParameterValue);
        this._activeUserCount = secureScoreParameterValue?.activeUserCount;
        this._averageComparativeScores = secureScoreParameterValue?.averageComparativeScores;
        this._azureTenantId = secureScoreParameterValue?.azureTenantId;
        this._controlScores = secureScoreParameterValue?.controlScores;
        this._createdDateTime = secureScoreParameterValue?.createdDateTime;
        this._currentScore = secureScoreParameterValue?.currentScore;
        this._enabledServices = secureScoreParameterValue?.enabledServices;
        this._licensedUserCount = secureScoreParameterValue?.licensedUserCount;
        this._maxScore = secureScoreParameterValue?.maxScore;
        this._vendorInformation = secureScoreParameterValue?.vendorInformation;
    };
    /**
     * Gets the controlScores property value. Contains tenant scores for a set of controls.
     * @returns a ControlScoreInterface
     */
    public get controlScores() {
        return this._controlScores;
    };
    /**
     * Sets the controlScores property value. Contains tenant scores for a set of controls.
     * @param value Value to set for the controlScores property.
     */
    public set controlScores(value: ControlScore[] | undefined) {
        if(value) {
            const controlScoresArrValue: ControlScoreImpl[] = [];
            this.controlScores?.forEach(element => {
                controlScoresArrValue.push((element instanceof ControlScoreImpl? element as ControlScoreImpl:new ControlScoreImpl(element)));
            });
            this._controlScores = controlScoresArrValue;
        }
    };
    /**
     * Gets the createdDateTime property value. The date when the entity is created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date when the entity is created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the currentScore property value. Tenant current attained score on specified date.
     * @returns a double
     */
    public get currentScore() {
        return this._currentScore;
    };
    /**
     * Sets the currentScore property value. Tenant current attained score on specified date.
     * @param value Value to set for the currentScore property.
     */
    public set currentScore(value: number | undefined) {
        if(value) {
            this._currentScore = value;
        }
    };
    /**
     * Gets the enabledServices property value. Microsoft-provided services for the tenant (for example, Exchange online, Skype, SharePoint).
     * @returns a string
     */
    public get enabledServices() {
        return this._enabledServices;
    };
    /**
     * Sets the enabledServices property value. Microsoft-provided services for the tenant (for example, Exchange online, Skype, SharePoint).
     * @param value Value to set for the enabledServices property.
     */
    public set enabledServices(value: string[] | undefined) {
        if(value) {
            this._enabledServices = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activeUserCount": n => { this.activeUserCount = n.getNumberValue(); },
            "averageComparativeScores": n => { this.averageComparativeScores = n.getCollectionOfObjectValues<AverageComparativeScoreImpl>(createAverageComparativeScoreFromDiscriminatorValue); },
            "azureTenantId": n => { this.azureTenantId = n.getStringValue(); },
            "controlScores": n => { this.controlScores = n.getCollectionOfObjectValues<ControlScoreImpl>(createControlScoreFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "currentScore": n => { this.currentScore = n.getNumberValue(); },
            "enabledServices": n => { this.enabledServices = n.getCollectionOfPrimitiveValues<string>(); },
            "licensedUserCount": n => { this.licensedUserCount = n.getNumberValue(); },
            "maxScore": n => { this.maxScore = n.getNumberValue(); },
            "vendorInformation": n => { this.vendorInformation = n.getObjectValue<SecurityVendorInformationImpl>(createSecurityVendorInformationFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the licensedUserCount property value. Licensed user count of the given tenant.
     * @returns a integer
     */
    public get licensedUserCount() {
        return this._licensedUserCount;
    };
    /**
     * Sets the licensedUserCount property value. Licensed user count of the given tenant.
     * @param value Value to set for the licensedUserCount property.
     */
    public set licensedUserCount(value: number | undefined) {
        if(value) {
            this._licensedUserCount = value;
        }
    };
    /**
     * Gets the maxScore property value. Tenant maximum possible score on specified date.
     * @returns a double
     */
    public get maxScore() {
        return this._maxScore;
    };
    /**
     * Sets the maxScore property value. Tenant maximum possible score on specified date.
     * @param value Value to set for the maxScore property.
     */
    public set maxScore(value: number | undefined) {
        if(value) {
            this._maxScore = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.activeUserCount){
            writer.writeNumberValue("activeUserCount", this.activeUserCount);
        }
        if(this.averageComparativeScores && this.averageComparativeScores.length != 0){        const averageComparativeScoresArrValue: AverageComparativeScoreImpl[] = [];
        this.averageComparativeScores?.forEach(element => {
            averageComparativeScoresArrValue.push((element instanceof AverageComparativeScoreImpl? element as AverageComparativeScoreImpl:new AverageComparativeScoreImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AverageComparativeScoreImpl>("averageComparativeScores", averageComparativeScoresArrValue);
        }
        if(this.azureTenantId){
            writer.writeStringValue("azureTenantId", this.azureTenantId);
        }
        if(this.controlScores && this.controlScores.length != 0){        const controlScoresArrValue: ControlScoreImpl[] = [];
        this.controlScores?.forEach(element => {
            controlScoresArrValue.push((element instanceof ControlScoreImpl? element as ControlScoreImpl:new ControlScoreImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ControlScoreImpl>("controlScores", controlScoresArrValue);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.currentScore){
            writer.writeNumberValue("currentScore", this.currentScore);
        }
        if(this.enabledServices){
            writer.writeCollectionOfPrimitiveValues<string>("enabledServices", this.enabledServices);
        }
        if(this.licensedUserCount){
            writer.writeNumberValue("licensedUserCount", this.licensedUserCount);
        }
        if(this.maxScore){
            writer.writeNumberValue("maxScore", this.maxScore);
        }
        if(this.vendorInformation){
            writer.writeObjectValue<SecurityVendorInformationImpl>("vendorInformation", (this.vendorInformation instanceof SecurityVendorInformationImpl? this.vendorInformation as SecurityVendorInformationImpl: new SecurityVendorInformationImpl(this.vendorInformation)));
        }
    };
    /**
     * Gets the vendorInformation property value. Complex type containing details about the security product/service vendor, provider, and subprovider (for example, vendor=Microsoft; provider=SecureScore). Required.
     * @returns a SecurityVendorInformationInterface
     */
    public get vendorInformation() {
        return this._vendorInformation;
    };
    /**
     * Sets the vendorInformation property value. Complex type containing details about the security product/service vendor, provider, and subprovider (for example, vendor=Microsoft; provider=SecureScore). Required.
     * @param value Value to set for the vendorInformation property.
     */
    public set vendorInformation(value: SecurityVendorInformation | undefined) {
        if(value) {
            this._vendorInformation = value instanceof SecurityVendorInformationImpl? value as SecurityVendorInformationImpl: new SecurityVendorInformationImpl(value);
        }
    };
}
