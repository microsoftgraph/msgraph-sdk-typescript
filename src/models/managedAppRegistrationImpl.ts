import {createManagedAppOperationFromDiscriminatorValue} from './createManagedAppOperationFromDiscriminatorValue';
import {createManagedAppPolicyFromDiscriminatorValue} from './createManagedAppPolicyFromDiscriminatorValue';
import {createMobileAppIdentifierFromDiscriminatorValue} from './createMobileAppIdentifierFromDiscriminatorValue';
import {EntityImpl, ManagedAppOperationImpl, ManagedAppPolicyImpl, MobileAppIdentifierImpl} from './index';
import {ManagedAppOperation} from './managedAppOperation';
import {ManagedAppPolicy} from './managedAppPolicy';
import {ManagedAppRegistration} from './managedAppRegistration';
import {MobileAppIdentifier} from './mobileAppIdentifier';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The ManagedAppEntity is the base entity type for all other entity types under app management workflow. */
export class ManagedAppRegistrationImpl extends EntityImpl implements ManagedAppRegistration {
    /** The app package Identifier */
    private _appIdentifier?: MobileAppIdentifier | undefined;
    /** App version */
    private _applicationVersion?: string | undefined;
    /** Zero or more policys already applied on the registered app when it last synchronized with managment service. */
    private _appliedPolicies?: ManagedAppPolicy[] | undefined;
    /** Date and time of creation */
    private _createdDateTime?: Date | undefined;
    /** Host device name */
    private _deviceName?: string | undefined;
    /** App management SDK generated tag, which helps relate apps hosted on the same device. Not guaranteed to relate apps in all conditions. */
    private _deviceTag?: string | undefined;
    /** Host device type */
    private _deviceType?: string | undefined;
    /** Zero or more reasons an app registration is flagged. E.g. app running on rooted device */
    private _flaggedReasons?: string[] | undefined;
    /** Zero or more policies admin intended for the app as of now. */
    private _intendedPolicies?: ManagedAppPolicy[] | undefined;
    /** Date and time of last the app synced with management service. */
    private _lastSyncDateTime?: Date | undefined;
    /** App management SDK version */
    private _managementSdkVersion?: string | undefined;
    /** Zero or more long running operations triggered on the app registration. */
    private _operations?: ManagedAppOperation[] | undefined;
    /** Operating System version */
    private _platformVersion?: string | undefined;
    /** The user Id to who this app registration belongs. */
    private _userId?: string | undefined;
    /** Version of the entity. */
    private _version?: string | undefined;
    /**
     * Gets the appIdentifier property value. The app package Identifier
     * @returns a MobileAppIdentifierInterface
     */
    public get appIdentifier() {
        return this._appIdentifier;
    };
    /**
     * Sets the appIdentifier property value. The app package Identifier
     * @param value Value to set for the appIdentifier property.
     */
    public set appIdentifier(value: MobileAppIdentifier | undefined) {
        if(value) {
            this._appIdentifier = value instanceof MobileAppIdentifierImpl? value as MobileAppIdentifierImpl: new MobileAppIdentifierImpl(value);
        }
    };
    /**
     * Gets the applicationVersion property value. App version
     * @returns a string
     */
    public get applicationVersion() {
        return this._applicationVersion;
    };
    /**
     * Sets the applicationVersion property value. App version
     * @param value Value to set for the applicationVersion property.
     */
    public set applicationVersion(value: string | undefined) {
        if(value) {
            this._applicationVersion = value;
        }
    };
    /**
     * Gets the appliedPolicies property value. Zero or more policys already applied on the registered app when it last synchronized with managment service.
     * @returns a ManagedAppPolicyInterface
     */
    public get appliedPolicies() {
        return this._appliedPolicies;
    };
    /**
     * Sets the appliedPolicies property value. Zero or more policys already applied on the registered app when it last synchronized with managment service.
     * @param value Value to set for the appliedPolicies property.
     */
    public set appliedPolicies(value: ManagedAppPolicy[] | undefined) {
        if(value) {
            const appliedPoliciesArrValue: ManagedAppPolicyImpl[] = [];
            this.appliedPolicies?.forEach(element => {
                appliedPoliciesArrValue.push((element instanceof ManagedAppPolicyImpl? element as ManagedAppPolicyImpl:new ManagedAppPolicyImpl(element)));
            });
            this._appliedPolicies = appliedPoliciesArrValue;
        }
    };
    /**
     * Instantiates a new managedAppRegistration and sets the default values.
     * @param managedAppRegistrationParameterValue 
     */
    public constructor(managedAppRegistrationParameterValue?: ManagedAppRegistration | undefined) {
        super(managedAppRegistrationParameterValue);
        this._appIdentifier = managedAppRegistrationParameterValue?.appIdentifier;
        this._applicationVersion = managedAppRegistrationParameterValue?.applicationVersion;
        this._appliedPolicies = managedAppRegistrationParameterValue?.appliedPolicies;
        this._createdDateTime = managedAppRegistrationParameterValue?.createdDateTime;
        this._deviceName = managedAppRegistrationParameterValue?.deviceName;
        this._deviceTag = managedAppRegistrationParameterValue?.deviceTag;
        this._deviceType = managedAppRegistrationParameterValue?.deviceType;
        this._flaggedReasons = managedAppRegistrationParameterValue?.flaggedReasons;
        this._intendedPolicies = managedAppRegistrationParameterValue?.intendedPolicies;
        this._lastSyncDateTime = managedAppRegistrationParameterValue?.lastSyncDateTime;
        this._managementSdkVersion = managedAppRegistrationParameterValue?.managementSdkVersion;
        this._operations = managedAppRegistrationParameterValue?.operations;
        this._platformVersion = managedAppRegistrationParameterValue?.platformVersion;
        this._userId = managedAppRegistrationParameterValue?.userId;
        this._version = managedAppRegistrationParameterValue?.version;
    };
    /**
     * Gets the createdDateTime property value. Date and time of creation
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Date and time of creation
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the deviceName property value. Host device name
     * @returns a string
     */
    public get deviceName() {
        return this._deviceName;
    };
    /**
     * Sets the deviceName property value. Host device name
     * @param value Value to set for the deviceName property.
     */
    public set deviceName(value: string | undefined) {
        if(value) {
            this._deviceName = value;
        }
    };
    /**
     * Gets the deviceTag property value. App management SDK generated tag, which helps relate apps hosted on the same device. Not guaranteed to relate apps in all conditions.
     * @returns a string
     */
    public get deviceTag() {
        return this._deviceTag;
    };
    /**
     * Sets the deviceTag property value. App management SDK generated tag, which helps relate apps hosted on the same device. Not guaranteed to relate apps in all conditions.
     * @param value Value to set for the deviceTag property.
     */
    public set deviceTag(value: string | undefined) {
        if(value) {
            this._deviceTag = value;
        }
    };
    /**
     * Gets the deviceType property value. Host device type
     * @returns a string
     */
    public get deviceType() {
        return this._deviceType;
    };
    /**
     * Sets the deviceType property value. Host device type
     * @param value Value to set for the deviceType property.
     */
    public set deviceType(value: string | undefined) {
        if(value) {
            this._deviceType = value;
        }
    };
    /**
     * Gets the flaggedReasons property value. Zero or more reasons an app registration is flagged. E.g. app running on rooted device
     * @returns a string
     */
    public get flaggedReasons() {
        return this._flaggedReasons;
    };
    /**
     * Sets the flaggedReasons property value. Zero or more reasons an app registration is flagged. E.g. app running on rooted device
     * @param value Value to set for the flaggedReasons property.
     */
    public set flaggedReasons(value: string[] | undefined) {
        if(value) {
            this._flaggedReasons = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appIdentifier": n => { this.appIdentifier = n.getObjectValue<MobileAppIdentifierImpl>(createMobileAppIdentifierFromDiscriminatorValue); },
            "applicationVersion": n => { this.applicationVersion = n.getStringValue(); },
            "appliedPolicies": n => { this.appliedPolicies = n.getCollectionOfObjectValues<ManagedAppPolicyImpl>(createManagedAppPolicyFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "deviceName": n => { this.deviceName = n.getStringValue(); },
            "deviceTag": n => { this.deviceTag = n.getStringValue(); },
            "deviceType": n => { this.deviceType = n.getStringValue(); },
            "flaggedReasons": n => { this.flaggedReasons = n.getCollectionOfPrimitiveValues<string>(); },
            "intendedPolicies": n => { this.intendedPolicies = n.getCollectionOfObjectValues<ManagedAppPolicyImpl>(createManagedAppPolicyFromDiscriminatorValue); },
            "lastSyncDateTime": n => { this.lastSyncDateTime = n.getDateValue(); },
            "managementSdkVersion": n => { this.managementSdkVersion = n.getStringValue(); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<ManagedAppOperationImpl>(createManagedAppOperationFromDiscriminatorValue); },
            "platformVersion": n => { this.platformVersion = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
            "version": n => { this.version = n.getStringValue(); },
        };
    };
    /**
     * Gets the intendedPolicies property value. Zero or more policies admin intended for the app as of now.
     * @returns a ManagedAppPolicyInterface
     */
    public get intendedPolicies() {
        return this._intendedPolicies;
    };
    /**
     * Sets the intendedPolicies property value. Zero or more policies admin intended for the app as of now.
     * @param value Value to set for the intendedPolicies property.
     */
    public set intendedPolicies(value: ManagedAppPolicy[] | undefined) {
        if(value) {
            const intendedPoliciesArrValue: ManagedAppPolicyImpl[] = [];
            this.intendedPolicies?.forEach(element => {
                intendedPoliciesArrValue.push((element instanceof ManagedAppPolicyImpl? element as ManagedAppPolicyImpl:new ManagedAppPolicyImpl(element)));
            });
            this._intendedPolicies = intendedPoliciesArrValue;
        }
    };
    /**
     * Gets the lastSyncDateTime property value. Date and time of last the app synced with management service.
     * @returns a Date
     */
    public get lastSyncDateTime() {
        return this._lastSyncDateTime;
    };
    /**
     * Sets the lastSyncDateTime property value. Date and time of last the app synced with management service.
     * @param value Value to set for the lastSyncDateTime property.
     */
    public set lastSyncDateTime(value: Date | undefined) {
        if(value) {
            this._lastSyncDateTime = value;
        }
    };
    /**
     * Gets the managementSdkVersion property value. App management SDK version
     * @returns a string
     */
    public get managementSdkVersion() {
        return this._managementSdkVersion;
    };
    /**
     * Sets the managementSdkVersion property value. App management SDK version
     * @param value Value to set for the managementSdkVersion property.
     */
    public set managementSdkVersion(value: string | undefined) {
        if(value) {
            this._managementSdkVersion = value;
        }
    };
    /**
     * Gets the operations property value. Zero or more long running operations triggered on the app registration.
     * @returns a ManagedAppOperationInterface
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. Zero or more long running operations triggered on the app registration.
     * @param value Value to set for the operations property.
     */
    public set operations(value: ManagedAppOperation[] | undefined) {
        if(value) {
            const operationsArrValue: ManagedAppOperationImpl[] = [];
            this.operations?.forEach(element => {
                operationsArrValue.push((element instanceof ManagedAppOperationImpl? element as ManagedAppOperationImpl:new ManagedAppOperationImpl(element)));
            });
            this._operations = operationsArrValue;
        }
    };
    /**
     * Gets the platformVersion property value. Operating System version
     * @returns a string
     */
    public get platformVersion() {
        return this._platformVersion;
    };
    /**
     * Sets the platformVersion property value. Operating System version
     * @param value Value to set for the platformVersion property.
     */
    public set platformVersion(value: string | undefined) {
        if(value) {
            this._platformVersion = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appIdentifier){
            writer.writeObjectValue<MobileAppIdentifierImpl>("appIdentifier", (this.appIdentifier instanceof MobileAppIdentifierImpl? this.appIdentifier as MobileAppIdentifierImpl: new MobileAppIdentifierImpl(this.appIdentifier)));
        }
        if(this.applicationVersion){
            writer.writeStringValue("applicationVersion", this.applicationVersion);
        }
        if(this.appliedPolicies && this.appliedPolicies.length != 0){        const appliedPoliciesArrValue: ManagedAppPolicyImpl[] = [];
        this.appliedPolicies?.forEach(element => {
            appliedPoliciesArrValue.push((element instanceof ManagedAppPolicyImpl? element as ManagedAppPolicyImpl:new ManagedAppPolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedAppPolicyImpl>("appliedPolicies", appliedPoliciesArrValue);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.deviceName){
            writer.writeStringValue("deviceName", this.deviceName);
        }
        if(this.deviceTag){
            writer.writeStringValue("deviceTag", this.deviceTag);
        }
        if(this.deviceType){
            writer.writeStringValue("deviceType", this.deviceType);
        }
        if(this.flaggedReasons){
            writer.writeCollectionOfPrimitiveValues<string>("flaggedReasons", this.flaggedReasons);
        }
        if(this.intendedPolicies && this.intendedPolicies.length != 0){        const intendedPoliciesArrValue: ManagedAppPolicyImpl[] = [];
        this.intendedPolicies?.forEach(element => {
            intendedPoliciesArrValue.push((element instanceof ManagedAppPolicyImpl? element as ManagedAppPolicyImpl:new ManagedAppPolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedAppPolicyImpl>("intendedPolicies", intendedPoliciesArrValue);
        }
        if(this.lastSyncDateTime){
            writer.writeDateValue("lastSyncDateTime", this.lastSyncDateTime);
        }
        if(this.managementSdkVersion){
            writer.writeStringValue("managementSdkVersion", this.managementSdkVersion);
        }
        if(this.operations && this.operations.length != 0){        const operationsArrValue: ManagedAppOperationImpl[] = [];
        this.operations?.forEach(element => {
            operationsArrValue.push((element instanceof ManagedAppOperationImpl? element as ManagedAppOperationImpl:new ManagedAppOperationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedAppOperationImpl>("operations", operationsArrValue);
        }
        if(this.platformVersion){
            writer.writeStringValue("platformVersion", this.platformVersion);
        }
        if(this.userId){
            writer.writeStringValue("userId", this.userId);
        }
        if(this.version){
            writer.writeStringValue("version", this.version);
        }
    };
    /**
     * Gets the userId property value. The user Id to who this app registration belongs.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. The user Id to who this app registration belongs.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        if(value) {
            this._userId = value;
        }
    };
    /**
     * Gets the version property value. Version of the entity.
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Version of the entity.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        if(value) {
            this._version = value;
        }
    };
}
