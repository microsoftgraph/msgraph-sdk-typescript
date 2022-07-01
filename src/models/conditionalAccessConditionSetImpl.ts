import {ConditionalAccessApplications} from './conditionalAccessApplications';
import {ConditionalAccessClientApplications} from './conditionalAccessClientApplications';
import {ConditionalAccessConditionSet} from './conditionalAccessConditionSet';
import {ConditionalAccessDevices} from './conditionalAccessDevices';
import {ConditionalAccessLocations} from './conditionalAccessLocations';
import {ConditionalAccessPlatforms} from './conditionalAccessPlatforms';
import {ConditionalAccessUsers} from './conditionalAccessUsers';
import {createConditionalAccessApplicationsFromDiscriminatorValue} from './createConditionalAccessApplicationsFromDiscriminatorValue';
import {createConditionalAccessClientApplicationsFromDiscriminatorValue} from './createConditionalAccessClientApplicationsFromDiscriminatorValue';
import {createConditionalAccessDevicesFromDiscriminatorValue} from './createConditionalAccessDevicesFromDiscriminatorValue';
import {createConditionalAccessLocationsFromDiscriminatorValue} from './createConditionalAccessLocationsFromDiscriminatorValue';
import {createConditionalAccessPlatformsFromDiscriminatorValue} from './createConditionalAccessPlatformsFromDiscriminatorValue';
import {createConditionalAccessUsersFromDiscriminatorValue} from './createConditionalAccessUsersFromDiscriminatorValue';
import {ConditionalAccessApplicationsImpl, ConditionalAccessClientApplicationsImpl, ConditionalAccessDevicesImpl, ConditionalAccessLocationsImpl, ConditionalAccessPlatformsImpl, ConditionalAccessUsersImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessConditionSetImpl implements ConditionalAccessConditionSet {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Applications and user actions included in and excluded from the policy. Required. */
    private _applications?: ConditionalAccessApplications | undefined;
    /** Client applications (service principals and workload identities) included in and excluded from the policy. Either users or clientApplications is required. */
    private _clientApplications?: ConditionalAccessClientApplications | undefined;
    /** Client application types included in the policy. Possible values are: all, browser, mobileAppsAndDesktopClients, exchangeActiveSync, easSupported, other. Required. */
    private _clientAppTypes?: string[] | undefined;
    /** Devices in the policy. */
    private _devices?: ConditionalAccessDevices | undefined;
    /** Locations included in and excluded from the policy. */
    private _locations?: ConditionalAccessLocations | undefined;
    /** Platforms included in and excluded from the policy. */
    private _platforms?: ConditionalAccessPlatforms | undefined;
    /** Sign-in risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required. */
    private _signInRiskLevels?: string[] | undefined;
    /** User risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required. */
    private _userRiskLevels?: string[] | undefined;
    /** Users, groups, and roles included in and excluded from the policy. Either users or clientApplications is required. */
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the applications property value. Applications and user actions included in and excluded from the policy. Required.
     * @returns a ConditionalAccessApplicationsInterface
     */
    public get applications() {
        return this._applications;
    };
    /**
     * Sets the applications property value. Applications and user actions included in and excluded from the policy. Required.
     * @param value Value to set for the applications property.
     */
    public set applications(value: ConditionalAccessApplications | undefined) {
        if(value) {
            this._applications = value instanceof ConditionalAccessApplicationsImpl? value as ConditionalAccessApplicationsImpl: new ConditionalAccessApplicationsImpl(value);
        }
    };
    /**
     * Gets the clientApplications property value. Client applications (service principals and workload identities) included in and excluded from the policy. Either users or clientApplications is required.
     * @returns a ConditionalAccessClientApplicationsInterface
     */
    public get clientApplications() {
        return this._clientApplications;
    };
    /**
     * Sets the clientApplications property value. Client applications (service principals and workload identities) included in and excluded from the policy. Either users or clientApplications is required.
     * @param value Value to set for the clientApplications property.
     */
    public set clientApplications(value: ConditionalAccessClientApplications | undefined) {
        if(value) {
            this._clientApplications = value instanceof ConditionalAccessClientApplicationsImpl? value as ConditionalAccessClientApplicationsImpl: new ConditionalAccessClientApplicationsImpl(value);
        }
    };
    /**
     * Gets the clientAppTypes property value. Client application types included in the policy. Possible values are: all, browser, mobileAppsAndDesktopClients, exchangeActiveSync, easSupported, other. Required.
     * @returns a string
     */
    public get clientAppTypes() {
        return this._clientAppTypes;
    };
    /**
     * Sets the clientAppTypes property value. Client application types included in the policy. Possible values are: all, browser, mobileAppsAndDesktopClients, exchangeActiveSync, easSupported, other. Required.
     * @param value Value to set for the clientAppTypes property.
     */
    public set clientAppTypes(value: string[] | undefined) {
        if(value) {
            this._clientAppTypes = value;
        }
    };
    /**
     * Instantiates a new conditionalAccessConditionSet and sets the default values.
     * @param conditionalAccessConditionSetParameterValue 
     */
    public constructor(conditionalAccessConditionSetParameterValue?: ConditionalAccessConditionSet | undefined) {
        this._additionalData = conditionalAccessConditionSetParameterValue?.additionalData ? conditionalAccessConditionSetParameterValue?.additionalData! : {};
        this._applications = conditionalAccessConditionSetParameterValue?.applications;
        this._clientApplications = conditionalAccessConditionSetParameterValue?.clientApplications;
        this._clientAppTypes = conditionalAccessConditionSetParameterValue?.clientAppTypes;
        this._devices = conditionalAccessConditionSetParameterValue?.devices;
        this._locations = conditionalAccessConditionSetParameterValue?.locations;
        this._platforms = conditionalAccessConditionSetParameterValue?.platforms;
        this._signInRiskLevels = conditionalAccessConditionSetParameterValue?.signInRiskLevels;
        this._userRiskLevels = conditionalAccessConditionSetParameterValue?.userRiskLevels;
        this._users = conditionalAccessConditionSetParameterValue?.users;
    };
    /**
     * Gets the devices property value. Devices in the policy.
     * @returns a ConditionalAccessDevicesInterface
     */
    public get devices() {
        return this._devices;
    };
    /**
     * Sets the devices property value. Devices in the policy.
     * @param value Value to set for the devices property.
     */
    public set devices(value: ConditionalAccessDevices | undefined) {
        if(value) {
            this._devices = value instanceof ConditionalAccessDevicesImpl? value as ConditionalAccessDevicesImpl: new ConditionalAccessDevicesImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "applications": n => { this.applications = n.getObjectValue<ConditionalAccessApplicationsImpl>(createConditionalAccessApplicationsFromDiscriminatorValue); },
            "clientApplications": n => { this.clientApplications = n.getObjectValue<ConditionalAccessClientApplicationsImpl>(createConditionalAccessClientApplicationsFromDiscriminatorValue); },
            "clientAppTypes": n => { this.clientAppTypes = n.getCollectionOfPrimitiveValues<string>(); },
            "devices": n => { this.devices = n.getObjectValue<ConditionalAccessDevicesImpl>(createConditionalAccessDevicesFromDiscriminatorValue); },
            "locations": n => { this.locations = n.getObjectValue<ConditionalAccessLocationsImpl>(createConditionalAccessLocationsFromDiscriminatorValue); },
            "platforms": n => { this.platforms = n.getObjectValue<ConditionalAccessPlatformsImpl>(createConditionalAccessPlatformsFromDiscriminatorValue); },
            "signInRiskLevels": n => { this.signInRiskLevels = n.getCollectionOfPrimitiveValues<string>(); },
            "userRiskLevels": n => { this.userRiskLevels = n.getCollectionOfPrimitiveValues<string>(); },
            "users": n => { this.users = n.getObjectValue<ConditionalAccessUsersImpl>(createConditionalAccessUsersFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the locations property value. Locations included in and excluded from the policy.
     * @returns a ConditionalAccessLocationsInterface
     */
    public get locations() {
        return this._locations;
    };
    /**
     * Sets the locations property value. Locations included in and excluded from the policy.
     * @param value Value to set for the locations property.
     */
    public set locations(value: ConditionalAccessLocations | undefined) {
        if(value) {
            this._locations = value instanceof ConditionalAccessLocationsImpl? value as ConditionalAccessLocationsImpl: new ConditionalAccessLocationsImpl(value);
        }
    };
    /**
     * Gets the platforms property value. Platforms included in and excluded from the policy.
     * @returns a ConditionalAccessPlatformsInterface
     */
    public get platforms() {
        return this._platforms;
    };
    /**
     * Sets the platforms property value. Platforms included in and excluded from the policy.
     * @param value Value to set for the platforms property.
     */
    public set platforms(value: ConditionalAccessPlatforms | undefined) {
        if(value) {
            this._platforms = value instanceof ConditionalAccessPlatformsImpl? value as ConditionalAccessPlatformsImpl: new ConditionalAccessPlatformsImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.applications){
            writer.writeObjectValue<ConditionalAccessApplicationsImpl>("applications", (this.applications instanceof ConditionalAccessApplicationsImpl? this.applications as ConditionalAccessApplicationsImpl: new ConditionalAccessApplicationsImpl(this.applications)));
        }
        if(this.clientApplications){
            writer.writeObjectValue<ConditionalAccessClientApplicationsImpl>("clientApplications", (this.clientApplications instanceof ConditionalAccessClientApplicationsImpl? this.clientApplications as ConditionalAccessClientApplicationsImpl: new ConditionalAccessClientApplicationsImpl(this.clientApplications)));
        }
        if(this.clientAppTypes){
            writer.writeCollectionOfPrimitiveValues<string>("clientAppTypes", this.clientAppTypes);
        }
        if(this.devices){
            writer.writeObjectValue<ConditionalAccessDevicesImpl>("devices", (this.devices instanceof ConditionalAccessDevicesImpl? this.devices as ConditionalAccessDevicesImpl: new ConditionalAccessDevicesImpl(this.devices)));
        }
        if(this.locations){
            writer.writeObjectValue<ConditionalAccessLocationsImpl>("locations", (this.locations instanceof ConditionalAccessLocationsImpl? this.locations as ConditionalAccessLocationsImpl: new ConditionalAccessLocationsImpl(this.locations)));
        }
        if(this.platforms){
            writer.writeObjectValue<ConditionalAccessPlatformsImpl>("platforms", (this.platforms instanceof ConditionalAccessPlatformsImpl? this.platforms as ConditionalAccessPlatformsImpl: new ConditionalAccessPlatformsImpl(this.platforms)));
        }
        if(this.signInRiskLevels){
            writer.writeCollectionOfPrimitiveValues<string>("signInRiskLevels", this.signInRiskLevels);
        }
        if(this.userRiskLevels){
            writer.writeCollectionOfPrimitiveValues<string>("userRiskLevels", this.userRiskLevels);
        }
        if(this.users){
            writer.writeObjectValue<ConditionalAccessUsersImpl>("users", (this.users instanceof ConditionalAccessUsersImpl? this.users as ConditionalAccessUsersImpl: new ConditionalAccessUsersImpl(this.users)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the signInRiskLevels property value. Sign-in risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.
     * @returns a string
     */
    public get signInRiskLevels() {
        return this._signInRiskLevels;
    };
    /**
     * Sets the signInRiskLevels property value. Sign-in risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.
     * @param value Value to set for the signInRiskLevels property.
     */
    public set signInRiskLevels(value: string[] | undefined) {
        if(value) {
            this._signInRiskLevels = value;
        }
    };
    /**
     * Gets the userRiskLevels property value. User risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.
     * @returns a string
     */
    public get userRiskLevels() {
        return this._userRiskLevels;
    };
    /**
     * Sets the userRiskLevels property value. User risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.
     * @param value Value to set for the userRiskLevels property.
     */
    public set userRiskLevels(value: string[] | undefined) {
        if(value) {
            this._userRiskLevels = value;
        }
    };
    /**
     * Gets the users property value. Users, groups, and roles included in and excluded from the policy. Either users or clientApplications is required.
     * @returns a ConditionalAccessUsersInterface
     */
    public get users() {
        return this._users;
    };
    /**
     * Sets the users property value. Users, groups, and roles included in and excluded from the policy. Either users or clientApplications is required.
     * @param value Value to set for the users property.
     */
    public set users(value: ConditionalAccessUsers | undefined) {
        if(value) {
            this._users = value instanceof ConditionalAccessUsersImpl? value as ConditionalAccessUsersImpl: new ConditionalAccessUsersImpl(value);
        }
    };
}
