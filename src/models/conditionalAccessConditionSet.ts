import {ConditionalAccessClientApp} from './conditionalAccessClientApp';
import {createConditionalAccessApplicationsFromDiscriminatorValue} from './createConditionalAccessApplicationsFromDiscriminatorValue';
import {createConditionalAccessClientApplicationsFromDiscriminatorValue} from './createConditionalAccessClientApplicationsFromDiscriminatorValue';
import {createConditionalAccessDevicesFromDiscriminatorValue} from './createConditionalAccessDevicesFromDiscriminatorValue';
import {createConditionalAccessLocationsFromDiscriminatorValue} from './createConditionalAccessLocationsFromDiscriminatorValue';
import {createConditionalAccessPlatformsFromDiscriminatorValue} from './createConditionalAccessPlatformsFromDiscriminatorValue';
import {createConditionalAccessUsersFromDiscriminatorValue} from './createConditionalAccessUsersFromDiscriminatorValue';
import {ConditionalAccessApplications, ConditionalAccessClientApplications, ConditionalAccessDevices, ConditionalAccessLocations, ConditionalAccessPlatforms, ConditionalAccessUsers} from './index';
import {RiskLevel} from './riskLevel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessConditionSet implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Applications and user actions included in and excluded from the policy. Required. */
    private _applications?: ConditionalAccessApplications | undefined;
    /** Client applications (service principals and workload identities) included in and excluded from the policy. Either users or clientApplications is required. */
    private _clientApplications?: ConditionalAccessClientApplications | undefined;
    /** Client application types included in the policy. Possible values are: all, browser, mobileAppsAndDesktopClients, exchangeActiveSync, easSupported, other. Required. */
    private _clientAppTypes?: ConditionalAccessClientApp[] | undefined;
    /** Devices in the policy. */
    private _devices?: ConditionalAccessDevices | undefined;
    /** Locations included in and excluded from the policy. */
    private _locations?: ConditionalAccessLocations | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Platforms included in and excluded from the policy. */
    private _platforms?: ConditionalAccessPlatforms | undefined;
    /** The servicePrincipalRiskLevels property */
    private _servicePrincipalRiskLevels?: RiskLevel[] | undefined;
    /** Sign-in risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required. */
    private _signInRiskLevels?: RiskLevel[] | undefined;
    /** User risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required. */
    private _userRiskLevels?: RiskLevel[] | undefined;
    /** Users, groups, and roles included in and excluded from the policy. Required. */
    private _users?: ConditionalAccessUsers | undefined;
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
     * Gets the applications property value. Applications and user actions included in and excluded from the policy. Required.
     * @returns a conditionalAccessApplications
     */
    public get applications() {
        return this._applications;
    };
    /**
     * Sets the applications property value. Applications and user actions included in and excluded from the policy. Required.
     * @param value Value to set for the applications property.
     */
    public set applications(value: ConditionalAccessApplications | undefined) {
        this._applications = value;
    };
    /**
     * Gets the clientApplications property value. Client applications (service principals and workload identities) included in and excluded from the policy. Either users or clientApplications is required.
     * @returns a conditionalAccessClientApplications
     */
    public get clientApplications() {
        return this._clientApplications;
    };
    /**
     * Sets the clientApplications property value. Client applications (service principals and workload identities) included in and excluded from the policy. Either users or clientApplications is required.
     * @param value Value to set for the clientApplications property.
     */
    public set clientApplications(value: ConditionalAccessClientApplications | undefined) {
        this._clientApplications = value;
    };
    /**
     * Gets the clientAppTypes property value. Client application types included in the policy. Possible values are: all, browser, mobileAppsAndDesktopClients, exchangeActiveSync, easSupported, other. Required.
     * @returns a conditionalAccessClientApp
     */
    public get clientAppTypes() {
        return this._clientAppTypes;
    };
    /**
     * Sets the clientAppTypes property value. Client application types included in the policy. Possible values are: all, browser, mobileAppsAndDesktopClients, exchangeActiveSync, easSupported, other. Required.
     * @param value Value to set for the clientAppTypes property.
     */
    public set clientAppTypes(value: ConditionalAccessClientApp[] | undefined) {
        this._clientAppTypes = value;
    };
    /**
     * Instantiates a new conditionalAccessConditionSet and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.conditionalAccessConditionSet";
    };
    /**
     * Gets the devices property value. Devices in the policy.
     * @returns a conditionalAccessDevices
     */
    public get devices() {
        return this._devices;
    };
    /**
     * Sets the devices property value. Devices in the policy.
     * @param value Value to set for the devices property.
     */
    public set devices(value: ConditionalAccessDevices | undefined) {
        this._devices = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "applications": n => { this.applications = n.getObjectValue<ConditionalAccessApplications>(createConditionalAccessApplicationsFromDiscriminatorValue); },
            "clientApplications": n => { this.clientApplications = n.getObjectValue<ConditionalAccessClientApplications>(createConditionalAccessClientApplicationsFromDiscriminatorValue); },
            "clientAppTypes": n => { this.clientAppTypes = n.getEnumValues<ConditionalAccessClientApp>(ConditionalAccessClientApp); },
            "devices": n => { this.devices = n.getObjectValue<ConditionalAccessDevices>(createConditionalAccessDevicesFromDiscriminatorValue); },
            "locations": n => { this.locations = n.getObjectValue<ConditionalAccessLocations>(createConditionalAccessLocationsFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "platforms": n => { this.platforms = n.getObjectValue<ConditionalAccessPlatforms>(createConditionalAccessPlatformsFromDiscriminatorValue); },
            "servicePrincipalRiskLevels": n => { this.servicePrincipalRiskLevels = n.getEnumValues<RiskLevel>(RiskLevel); },
            "signInRiskLevels": n => { this.signInRiskLevels = n.getEnumValues<RiskLevel>(RiskLevel); },
            "userRiskLevels": n => { this.userRiskLevels = n.getEnumValues<RiskLevel>(RiskLevel); },
            "users": n => { this.users = n.getObjectValue<ConditionalAccessUsers>(createConditionalAccessUsersFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the locations property value. Locations included in and excluded from the policy.
     * @returns a conditionalAccessLocations
     */
    public get locations() {
        return this._locations;
    };
    /**
     * Sets the locations property value. Locations included in and excluded from the policy.
     * @param value Value to set for the locations property.
     */
    public set locations(value: ConditionalAccessLocations | undefined) {
        this._locations = value;
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
     * Gets the platforms property value. Platforms included in and excluded from the policy.
     * @returns a conditionalAccessPlatforms
     */
    public get platforms() {
        return this._platforms;
    };
    /**
     * Sets the platforms property value. Platforms included in and excluded from the policy.
     * @param value Value to set for the platforms property.
     */
    public set platforms(value: ConditionalAccessPlatforms | undefined) {
        this._platforms = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ConditionalAccessApplications>("applications", this.applications);
        writer.writeObjectValue<ConditionalAccessClientApplications>("clientApplications", this.clientApplications);
        this.clientAppTypes && writer.writeEnumValue<ConditionalAccessClientApp>("clientAppTypes", ...this.clientAppTypes);
        writer.writeObjectValue<ConditionalAccessDevices>("devices", this.devices);
        writer.writeObjectValue<ConditionalAccessLocations>("locations", this.locations);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<ConditionalAccessPlatforms>("platforms", this.platforms);
        this.servicePrincipalRiskLevels && writer.writeEnumValue<RiskLevel>("servicePrincipalRiskLevels", ...this.servicePrincipalRiskLevels);
        this.signInRiskLevels && writer.writeEnumValue<RiskLevel>("signInRiskLevels", ...this.signInRiskLevels);
        this.userRiskLevels && writer.writeEnumValue<RiskLevel>("userRiskLevels", ...this.userRiskLevels);
        writer.writeObjectValue<ConditionalAccessUsers>("users", this.users);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the servicePrincipalRiskLevels property value. The servicePrincipalRiskLevels property
     * @returns a riskLevel
     */
    public get servicePrincipalRiskLevels() {
        return this._servicePrincipalRiskLevels;
    };
    /**
     * Sets the servicePrincipalRiskLevels property value. The servicePrincipalRiskLevels property
     * @param value Value to set for the servicePrincipalRiskLevels property.
     */
    public set servicePrincipalRiskLevels(value: RiskLevel[] | undefined) {
        this._servicePrincipalRiskLevels = value;
    };
    /**
     * Gets the signInRiskLevels property value. Sign-in risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.
     * @returns a riskLevel
     */
    public get signInRiskLevels() {
        return this._signInRiskLevels;
    };
    /**
     * Sets the signInRiskLevels property value. Sign-in risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.
     * @param value Value to set for the signInRiskLevels property.
     */
    public set signInRiskLevels(value: RiskLevel[] | undefined) {
        this._signInRiskLevels = value;
    };
    /**
     * Gets the userRiskLevels property value. User risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.
     * @returns a riskLevel
     */
    public get userRiskLevels() {
        return this._userRiskLevels;
    };
    /**
     * Sets the userRiskLevels property value. User risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.
     * @param value Value to set for the userRiskLevels property.
     */
    public set userRiskLevels(value: RiskLevel[] | undefined) {
        this._userRiskLevels = value;
    };
    /**
     * Gets the users property value. Users, groups, and roles included in and excluded from the policy. Required.
     * @returns a conditionalAccessUsers
     */
    public get users() {
        return this._users;
    };
    /**
     * Sets the users property value. Users, groups, and roles included in and excluded from the policy. Required.
     * @param value Value to set for the users property.
     */
    public set users(value: ConditionalAccessUsers | undefined) {
        this._users = value;
    };
}
