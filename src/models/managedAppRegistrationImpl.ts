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
export class ManagedAppRegistrationImpl extends EntityImpl implements ManagedAppRegistration, Parsable {
    /** The app package Identifier */
    public appIdentifier?: MobileAppIdentifier | undefined;
    /** App version */
    public applicationVersion?: string | undefined;
    /** Zero or more policys already applied on the registered app when it last synchronized with managment service. */
    public appliedPolicies?: ManagedAppPolicy[] | undefined;
    /** Date and time of creation */
    public createdDateTime?: Date | undefined;
    /** Host device name */
    public deviceName?: string | undefined;
    /** App management SDK generated tag, which helps relate apps hosted on the same device. Not guaranteed to relate apps in all conditions. */
    public deviceTag?: string | undefined;
    /** Host device type */
    public deviceType?: string | undefined;
    /** Zero or more reasons an app registration is flagged. E.g. app running on rooted device */
    public flaggedReasons?: string[] | undefined;
    /** Zero or more policies admin intended for the app as of now. */
    public intendedPolicies?: ManagedAppPolicy[] | undefined;
    /** Date and time of last the app synced with management service. */
    public lastSyncDateTime?: Date | undefined;
    /** App management SDK version */
    public managementSdkVersion?: string | undefined;
    /** Zero or more long running operations triggered on the app registration. */
    public operations?: ManagedAppOperation[] | undefined;
    /** Operating System version */
    public platformVersion?: string | undefined;
    /** The user Id to who this app registration belongs. */
    public userId?: string | undefined;
    /** Version of the entity. */
    public version?: string | undefined;
    /**
     * Instantiates a new managedAppRegistration and sets the default values.
     * @param managedAppRegistrationParameterValue 
     */
    public constructor(managedAppRegistrationParameterValue?: ManagedAppRegistration | undefined) {
        super();
        this.appIdentifier = managedAppRegistrationParameterValue?.appIdentifier ;
        this.applicationVersion = managedAppRegistrationParameterValue?.applicationVersion ;
        this.appliedPolicies = managedAppRegistrationParameterValue?.appliedPolicies ;
        this.createdDateTime = managedAppRegistrationParameterValue?.createdDateTime ;
        this.deviceName = managedAppRegistrationParameterValue?.deviceName ;
        this.deviceTag = managedAppRegistrationParameterValue?.deviceTag ;
        this.deviceType = managedAppRegistrationParameterValue?.deviceType ;
        this.flaggedReasons = managedAppRegistrationParameterValue?.flaggedReasons ;
        this.intendedPolicies = managedAppRegistrationParameterValue?.intendedPolicies ;
        this.lastSyncDateTime = managedAppRegistrationParameterValue?.lastSyncDateTime ;
        this.managementSdkVersion = managedAppRegistrationParameterValue?.managementSdkVersion ;
        this.operations = managedAppRegistrationParameterValue?.operations ;
        this.platformVersion = managedAppRegistrationParameterValue?.platformVersion ;
        this.userId = managedAppRegistrationParameterValue?.userId ;
        this.version = managedAppRegistrationParameterValue?.version ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appIdentifier){
        writer.writeObjectValue<MobileAppIdentifierImpl>("appIdentifier", new MobileAppIdentifierImpl(this.appIdentifier));
        }
        if(this.applicationVersion){
        writer.writeStringValue("applicationVersion", this.applicationVersion);
        }
        if(this.appliedPolicies && this.appliedPolicies.length != 0){        const appliedPoliciesArrValue: ManagedAppPolicyImpl[] = []; this.appliedPolicies?.forEach(element => {appliedPoliciesArrValue.push(new ManagedAppPolicyImpl(element));});
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
        if(this.intendedPolicies && this.intendedPolicies.length != 0){        const intendedPoliciesArrValue: ManagedAppPolicyImpl[] = []; this.intendedPolicies?.forEach(element => {intendedPoliciesArrValue.push(new ManagedAppPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedAppPolicyImpl>("intendedPolicies", intendedPoliciesArrValue);
        }
        if(this.lastSyncDateTime){
        writer.writeDateValue("lastSyncDateTime", this.lastSyncDateTime);
        }
        if(this.managementSdkVersion){
        writer.writeStringValue("managementSdkVersion", this.managementSdkVersion);
        }
        if(this.operations && this.operations.length != 0){        const operationsArrValue: ManagedAppOperationImpl[] = []; this.operations?.forEach(element => {operationsArrValue.push(new ManagedAppOperationImpl(element));});
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
}
